const express = require("express");
const DinosaurController = require("./DinosaurController");
const isAuth = require("../Auth/isAuth");
const isAdmin = require("../Auth/isAdmin");

const dinosaurController = new DinosaurController();

const Router = express.Router();

Router.get("/dinos", isAuth, (req, res, next) =>
  dinosaurController.getAll(req, res, next),
);
Router.post("/dinos", isAuth, (req, res, next) =>
  dinosaurController.postDino(req, res, next),
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
Router.put("/dinos/delete/:id", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.softDelete(req, res, next),
);
Router.put("/dinos/restore/:id", isAuth, isAdmin, (req, res, next) =>
  dinosaurController.restore(req, res, next),
);

module.exports = Router;
