'use strict'

require('dotenv').config({path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'})

module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  IS_MOCK: process.env.IS_MOCK,
  DB: {
    CONTENT_URL: process.env.DB_CONTENT_URL
  },
}
