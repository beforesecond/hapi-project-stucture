'use strict'

const Hapi = require('hapi')
const Config = require('./src/config')
const Logger = require('./src/utils/logger')

const server = new Hapi.Server(Config.server.connection)

const start = async () => {
  try {
    await server.register(Config.server.registers)
    await server.start()

    Logger.info(`Server is running at ${server.info.uri}`)
  } catch (error) {
    Logger.error(`Server error ${error.message}`)
  }
}

start();

module.exports = server;
