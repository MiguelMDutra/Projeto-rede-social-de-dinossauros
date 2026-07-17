const express = require("express");
const isAuth = require("../../Auth/isAuth.js");
const HabitatController = require("./HabitatController.js");
const habitatController = new HabitatController();

const Router = express.Router();

Router.get("/habitats", isAuth, (req, res, next) =>
  habitatController.getAll(req, res, next),
);
Router.post("/habitats", isAuth, (req, res, next) =>
  habitatController.createHabitat(req, res, next),
);
Router.get("/habitats/user", isAuth, (req, res, next) =>
  habitatController.getUsersHabitats(req, res, next),
);
Router.get("/habitats/:id", isAuth, (req, res, next) =>
  habitatController.getById(req, res, next),
);
Router.patch("/habitats/patch/:id", isAuth, (req, res, next) =>
  habitatController.update(req, res, next),
);
Router.put("/habitats/delete/:id", isAuth, (req, res, next) =>
  habitatController.softDelete(req, res, next),
);
Router.put("/habitats/restore/:id", isAuth, (req, res, next) =>
  habitatController.restore(req, res, next),
);

module.exports = Router;
