/* eslint-disable no-console */
/*
/*
*Copyright (c) 2018, DeCurtis Corporation. All rights reserved.
*
*DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER*
*
*Author: DeCurtis Team
*Creation Date: Wed Oct 24 2018 4:19:52 PM
*/

// const get = require("lodash/get");
const helmet = require("helmet");
// const { logger, messages, reConfigureLogger, writeLog } = require("./loggerServer");
// const { formatLog } = require("./loggerUtils");

const expressStaticGzip = require("express-static-gzip");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const componentConfig = require("dxp-web-server");
const { healthCheckerMiddleware } = require("dxp-node-health-checker");
const dotenv = require('dotenv');

dotenv.config();
const {CLIENT_ID, CLIENT_SECRET, IDENTITY_ACCESS_MANAGEMENT_SERVICE_URL, CONFIGURATION_SERVICE_URL, CONTEXT} = process.env

const router = express.Router();

const port = 5000;
const app = express();
const buildPath = path.resolve(`${__dirname}/../build/`);
let configurations;
// let appProperties;

app.set("views", buildPath);
app.set("view engine", "ejs");

const renderHtml = (req, res) => {
  //const initialState = { configurations };
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-UA-Compatible", "IE=edge");
  res.sendFile(path.resolve(`${__dirname}/../build/index.html`));
  // const nonceHash = Math.floor(Math.random() * 1000000000000000);
  // res.render("index.html", {
  //   initialState,
  //   // CDN: configurations.cdnBaseURL || "",
  //   // nonceHash
  // }, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     // logger.error(formatLog(undefined, messages.error, "Get Method: html load error", undefined, "error", new Error(err)));
  //     throw new Error(err);
  //   }
  //   // logger.info(formatLog(undefined, messages.outgoingResponse, "Get Method: html response sent", undefined, "info"));
  //   return res.end(result);
  // });
};

app.use(helmet({
  frameguard: true
}));

const getConfig = () => configurations;

app.use((req, res, next) => {
  res.header("Expires", new Date(Date.now() + 2592000).toUTCString());
  res.header("Access-Control-Max-Age", 60 * 60 * 24 * 30);
  res.header("Cache-Control", "public, max-age=2592000");
  next();
});

app.use(healthCheckerMiddleware({
  getConfigurations: getConfig
}));

//app.post(`${baseRoute}/log`, bodyParser.json(), writeLog);

router.get("/*", renderHtml);

router.put(`/configuration`, bodyParser.json(), (req, res) => {
  componentConfig.refreshConfig().then((response) => {
    configurations = response;
    // reConfigureLogger(configurations.logLevel);
    res.status(200).send({ message: "Success", configurations});
  }).catch((error) => {
    // logger.error(formatLog(undefined, messages.error, "Error in refreshing configurations!!!", undefined, "error", new Error(error)));
    res.status(500).send({ message: "Unable to refresh configuration", error, configurations});
  });
});

console.log("App Initialized!!!");

componentConfig.getConfig({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    authenticationServiceUrl: IDENTITY_ACCESS_MANAGEMENT_SERVICE_URL,
    configurationServiceUrl: CONFIGURATION_SERVICE_URL
}).then((response) => {
  configurations = response;
  console.log("Configurations ", configurations);
  console.log("Context ", CONTEXT);
  app.use("/" + CONTEXT.substring(CONTEXT.lastIndexOf("/")), (expressStaticGzip(buildPath)));
  app.use("/" + CONTEXT.substring(CONTEXT.lastIndexOf("/")), router);
  // console.log("reconfigure logger : ", reConfigureLogger)
  // reConfigureLogger(configurations.logLevel);
}).catch((error) => {
  console.error(error);
  // logger.error(formatLog(undefined, messages.error, "Unable to load configurations!!!", undefined, "error", new Error(error)));
});

app.listen(port, (err) => {
  if (err) {
    const message = "==> 😭 OMG!!! Unable to load App, please refer below error: ";
    console.error(message, err);
    // logger.error(formatLog(undefined, messages.error, "Unable to load App!!!", undefined, "error", new Error(err)));
    throw new Error(message);
  }
  // logger.info(formatLog(undefined, messages.serviceStarted, "Payment App: Application initiated", undefined, "info"));
  console.log(`==> 🌎  Listening at http://localhost:${port}`);
});
