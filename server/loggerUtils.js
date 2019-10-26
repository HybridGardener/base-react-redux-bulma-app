/* eslint-disable no-unused-expressions */

const get = require("lodash/get");
const os = require("os");
const uuid = require("uuid/v4");

const getOffset = () => {
  let isOffsetNegative = false;
  let offsetMinutes = new Date().getTimezoneOffset();
  isOffsetNegative = offsetMinutes < 0;
  offsetMinutes = isOffsetNegative ? -(offsetMinutes) : offsetMinutes;
  let minutes = offsetMinutes % 60;
  let hours = Math.floor(offsetMinutes / 60);
  hours = (hours.toString().length === 1) ? `0${hours}` : hours;
  minutes = (minutes.toString().length === 1) ? `${minutes}0` : minutes;
  return isOffsetNegative ? `+${hours}:${minutes}` : `-${hours}:${minutes}`;
};

const getClientIp = req => (req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress || "").split(",")[0].trim();

const getDeviceInfo = (req = {}) => {
  const deviceInfo = {};
  let ip = null;
  if (!req.headers) {
    const networkInterface = os.networkInterfaces();
    ip = () => {
      if (networkInterface.eth0) {
        return networkInterface.eth0[0] ? networkInterface.eth0[0].address : "";
      } else if (networkInterface.en1) {
        return networkInterface.en1[1] ? networkInterface.en1[1].address : "";
      }
      return "";
    };
  }
  deviceInfo.name = os.hostname();
  deviceInfo.id = ip || getClientIp(req);
  deviceInfo.operatingSystem = os.type();
  deviceInfo.osVersion = os.release();
  return deviceInfo;
};

const formatLog = (req, code, message, messageDetail, severity, error = null) => ({
  offset: getOffset(),
  stackTrace: error !== null ? error.stack : undefined,
  correlationId: uuid(),
  hostname: os.hostname(),
  messageCode: code,
  messageInfo: message,
  messageDetail: messageDetail || undefined,
  severity,
  deviceInfo: getDeviceInfo(req)
});

const getConfigDetails = param => ({
  baseURL: get(param, "baseURL"),
  headers: {
    common: {
      Accept: get(param, "headers.common.Accept"),
      CorrelationId: get(param, "headers.common.CorrelationId")
    },
    maxContentLength: get(param, "headers.maxContentLength"),
    method: get(param, "headers.method"),
    timeout: get(param, "headers.timeout")
  },
  maxContentLength: get(param, "maxContentLength"),
  method: get(param, "method"),
  timeout: get(param, "timeout"),
  url: get(param, "url"),
  xsrfCookieName: get(param, "xsrfCookieName"),
  xsrfHeaderName: get(param, "xsrfHeaderName")
});

const getResponseDetails = param => ({
  config: {
    baseURL: get(param, "config.baseURL"),
    headers: {
      Accept: get(param, "config.headers.Accept"),
      CorrelationId: get(param, "config.headers.CorrelationId")
    },
    maxContentLength: get(param, "maxContentLength"),
    method: get(param, "method"),
    timeout: get(param, "timeout"),
    url: get(param, "url"),
    xsrfCookieName: get(param, "xsrfCookieName"),
    xsrfHeaderName: get(param, "xsrfHeaderName")
  },
  headers: get(param, "headers"),
  request: get(param, "request"),
  status: get(param, "status"),
  statusText: get(param, "statusText")
});

module.exports = { getOffset, getClientIp, getDeviceInfo, formatLog, getConfigDetails, getResponseDetails }
