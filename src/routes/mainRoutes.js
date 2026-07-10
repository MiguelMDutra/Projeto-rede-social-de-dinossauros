const users = require("./userRoutes.js");
const express = require("express");

module.exports = (app) => {
  app.use(express.json());
  app.use(users);
};
