const ClassificationController = require("./ClassificationController.js");
const isAuth = require("../../Auth/isAuth.js");
const express = require("express");
const classificationController = new ClassificationController();
const Router = express.Router();

Router.get("/classification", isAuth, (req, res, next) =>
  classificationController.getAll(req, res, next),
);
Router.post("/classification/post", isAuth, (req, res, next) =>
  classificationController.postClassification(req, res, next),
);
Router.put("classification/update", isAuth, (req, res, next) =>
  classificationController.update(req, res, next),
);
Router.get("/classification/:id", isAuth, (req, res, next) =>
  classificationController.getById(req, res, next),
);
Router.delete("classification/delete/:id", isAuth, (req, res, next) =>
  classificationController.softDeleteClassification(req, res, next),
);
Router.put("classification/restore/:id", isAuth, (req, res, next) =>
  classificationController.destroyServices(req, res, next),
);

module.exports = Router;
