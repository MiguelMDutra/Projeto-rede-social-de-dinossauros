const express = require("express");
const isAuth = require("../../Auth/isAuth.js");
const HabitatController = require("./HabitatController.js");
const habitatController = new HabitatController();

const Router = express.Router();

Router.get("/habitats", isAuth, (req, res, next) =>
  habitatController.getAll(req, res, next),
); //tested
Router.post("/habitats", isAuth, (req, res, next) =>
  habitatController.createHabitat(req, res, next),
); //tested
Router.get("/habitats/user", isAuth, (req, res, next) =>
  habitatController.getUserHabitats(req, res, next),
); //tested
Router.get("/habitats/:id", isAuth, (req, res, next) =>
  habitatController.getById(req, res, next),
); //tested
Router.patch("/habitats/patch/:id", isAuth, (req, res, next) =>
  habitatController.update(req, res, next),
); //tested
Router.delete("/habitats/delete/:id", isAuth, (req, res, next) =>
  habitatController.softDelete(req, res, next),
);
Router.put("/habitats/restore/:id", isAuth, (req, res, next) =>
  habitatController.restore(req, res, next),
);

module.exports = Router;
