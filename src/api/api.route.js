'use strict';

const API = require('./api.controller');

const routes = [
  {
    method: 'GET',
    path: '/api/index/',
    config: API.index
  }
];

module.exports = routes;
