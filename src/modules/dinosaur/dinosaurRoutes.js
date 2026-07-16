const express = require("express");
const DinosaurController = require("../../core/controller/DinosaurController.js");
const isAuth = require("../Auth/isAuth");
const dinosaurController = new DinosaurController();
const isAdmin = require("../Auth/isAdmin.js");

const Router = express.Router();

Router.get("/dinos", isAuth, (req, res, next) =>
  dinosaurController.getAll(req, res, next),
);
Router.get("/dinos/busca", isAuth, (req, res, next) =>
  dinosaurController.getDinosBy(req, res, next),
);
Router.get("/dinos/pendentes", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.getPendingDinos(req, res, next),
);
Router.patch("/dinos/:id/approve", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.approvePendingDino(req, res, next),
);
Router.patch("/dinos/:id/disapprove", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.disapprovePendingDino(req, res, next),
);
Router.get("/dinos/:id", isAuth, (req, res, next) =>
  dinosaurController.getById(req, res, next),
);
Router.put("/dinos/update/:id", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.update(req, res, next),
);

module.exports = Router;
