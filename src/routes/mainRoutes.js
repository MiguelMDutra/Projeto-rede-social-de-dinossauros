const users = require("./userRoutes.js");
const dinos = require("./dinosaurRoutes.js");
const express = require("express");

module.exports = (app) => {
  app.use(express.json());
  app.use(users);
  app.use(dinos);
};
