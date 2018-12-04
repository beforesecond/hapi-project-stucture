"use strict";

const vision = require("vision");
const inert = require("inert");
const Constants = require("./constants");
const router = require("./route");
const Scooter = require("scooter");
const jwt = require("hapi-auth-jwt2");

module.exports = {
  server: {
    connection: {
      host: Constants.HOST || "127.0.0.1",
      port: Constants.PORT || 7000,
      routes: {
        cors: {
          origin: [ '*' ],
          credentials: true,
          additionalHeaders: [
            'Access-Control-Allow-Origin',
            'Access-Control-Request-Method',
            'Access-Control-Allow-Methods'
          ]
        }
      }
    },
    registers: [ 
       vision,
       inert,
       router,
       Scooter,
       jwt
    ]
  }
};
