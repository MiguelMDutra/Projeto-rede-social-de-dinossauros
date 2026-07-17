const express = require("express");
const users = require("../../modules/user/userRoutes.js");
const dinos = require("../../modules/dinosaur/dinosaurRoutes.js");
const classifications = require("../../modules/dinoAddons/classification/ClassificationRoutes.js");
const habitat = require("../../modules/dinoAddons/habitat/habitatRoutes.js");

module.exports = (app) => {
  app.use(express.json());
  app.use(users);
  app.use(dinos);
  app.use(classifications);
  app.use(habitat);
};
