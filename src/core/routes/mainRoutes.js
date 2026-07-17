const express = require("express");
const users = require("../../modules/user/userRoutes.js");
const dinos = require("../../modules/dinosaur/dinosaurRoutes.js");
const classifications = require("../../modules/dinoAddons/classification/ClassificationRoutes.js");
const habitat = require("../../modules/dinoAddons/habitat/habitatRoutes.js");
const geologicalPeriod = require("../../modules/dinoAddons/geologicalPeriod/geologicalPeriodRoutes.js");
const discoverySites = require("../../modules/dinoAddons/discoverySites/discoverySitesRoutes.js");

module.exports = (app) => {
  app.use(express.json());
  app.use(users);
  app.use(dinos);
  app.use(classifications);
  app.use(habitat);
  app.use(geologicalPeriod);
  app.use(discoverySites);
};
