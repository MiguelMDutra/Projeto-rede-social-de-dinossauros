const express = require("express");
const DinosaurController = require("../controllers/DinosaurController");
const isAuth = require("../Auth/isAuth");
const dinosaurController = new DinosaurController();
const isAdmin = require("../Auth/isAdmin.js");

const Router = express.Router();

Router.get("/dinos", isAuth, (req, res, next) =>
  dinosaurController.getAll(req, res, next),
);
Router.get("/dinos/busca/nome", isAuth, (req, res, next) =>
  dinosaurController.getByName(req, res, next),
);
Router.post("/dinos", (req, res, next) =>
  dinosaurController.postDino(req, res, next),
);
Router.get("/dinos/pendentes", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.getPendingDinos(req, res, next),
);
Router.patch("/dinos/approve", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.approvePendingDino(req, res, next),
);
Router.patch("/dinos/disapprove", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.approvePendingDino(req, res, next),
);

module.exports = Router;
