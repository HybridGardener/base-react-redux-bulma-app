/*
/*
*Copyright (c) 2018, DeCurtis Corporation. All rights reserved.
*
*DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER*
*
*Author: DeCurtis Team
*Creation Date: Wed Oct 24 2018 4:19:52 PM
*/

const safeStringify = require("fast-safe-stringify");
const fs = require("fs");
const path = require("path");
const winston = require("winston");
const isArray = require("lodash/isArray");
const { formatLog } = require("./loggerUtils");
const packageFile = require("../package.json");

const { combine, timestamp, printf } = winston.format;

const logDir = process.env.LOG_FILE_PATH || "Logs";
const logFile = path.join(logDir, "/logs.log");

const messages = {
  incomingRequest: "5001",
  outgoingResponse: "5002",
  outgoingRequest: "5003",
  incomingResponse: "5004",
  error: "9001",
  serviceStarted: "1001",
  serviceStopped: "1002"
};

if (!fs.existsSync(path.resolve(logDir))) {
  fs.mkdirSync(path.resolve(logDir));
}

const winstonFormat = printf((info) => {
  if (info.message) {
    return JSON.stringify({
      componentName: "Payment-UI",
      hostname: info.message.hostname,
      offset: info.message.offset,
      timestamp: info.timestamp,
      correlationId: info.message.correlationId,
      messageCode: info.message.messageCode,
      message: info.message.messageInfo,
      severity: info.message.severity,
      componentVersion: packageFile.version,
      deviceinfo: info.message.deviceInfo,
      userinfo: info.message.userinfo,
      traceinfo: info.message.traceinfo,
      messageDetail: safeStringify(info.message.messageDetail || info.message),
      stackTrace: info.message.stackTrace
    });
  } else {
    return false;
  }
});

const transports = new winston.transports.File({
  maxsize: 30000000,
  maxFiles: 10,
  filename: logFile,
  tailable: true,
  level: "error"
});

const logger = winston.createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  },
  format: combine(timestamp(), winstonFormat),
  transports: [
    transports
  ],
  exitOnError: false,
  exceptionHandlers: [
    transports
  ]
});

const reConfigureLogger = (level) => {
  transports.level = level;
};

const writeLog = (req, res) => {
  try {
    const logs = req.body;
    if (isArray(logs)) {
      logs.map((log) => {
        const formatedLog = {
          timestamp: log.timestamp,
          message: {
            hostname: log.hostname,
            offset: log.offset,
            correlationId: log.correlationId,
            messageInfo: log.message,
            severity: log.severity,
            messageCode: log.messageCode,
            deviceInfo: log.deviceInfo,
            messageDetail: log.messageDetail
          }
        };
        if (log.severity === "error") {
          return logger.error(formatedLog);
        } else {
          return logger.info(formatedLog);
        }
      });
      res.status(200)
        .send({ message: "Success" });
    } else {
      res.status(500)
        .send({ message: "Unable to process log data" });
    }
  } catch (e) {
    logger.error(formatLog(undefined, messages.error, "error in log call", undefined, "error", new Error(e)));
    res.status(500)
      .send({
        message: "Server error",
        error: e
      });
  }
};

module.exports = { logger, messages, reConfigureLogger, writeLog };
