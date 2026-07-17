const express = require("express");
const isAuth = require("../../Auth/isAuth.js");
const GeologicalPeriodController = require("./GeologicalPeriodController.js");
const geologicalPeriodController = new GeologicalPeriodController();

const Router = express.Router();

Router.get("/geologicalPeriod", isAuth, (req, res, next) =>
  geologicalPeriodController.getAll(req, res, next),
);
Router.post("/geologicalPeriod", isAuth, (req, res, next) =>
  geologicalPeriodController.createGeological(req, res, next),
);
Router.get("/geologicalPeriod/:id", isAuth, (req, res, next) =>
  geologicalPeriodController.getById(req, res, next),
);
Router.patch("/geologicalPeriod/patch/:id", isAuth, (req, res, next) =>
  geologicalPeriodController.update(req, res, next),
);
Router.put("/geologicalPeriod/delete/:id", isAuth, (req, res, next) =>
  geologicalPeriodController.softDelete(req, res, next),
);
Router.put("/geologicalPeriod/restore/:id", isAuth, (req, res, next) =>
  geologicalPeriodController.restore(req, res, next),
);

module.exports = Router;
