'use strict'

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logFormat = printf(info => {
  return `[${info.level}]${info.timestamp}: ${info.message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [ new transports.Console() ]
})

const info = (message) => {
  logger.log({
    level: 'info',
    message: message
  });
}

const error = (message) => {
  logger.log({
    level: 'error',
    message: message
  });
}

module.exports = {
  info,
  error
}