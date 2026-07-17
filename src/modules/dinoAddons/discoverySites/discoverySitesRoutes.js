const DiscoverySiteController = require("./DiscoverySiteController.js");
const isAuth = require("../../Auth/isAuth.js");
const express = require("express");
const discoverySiteController = new DiscoverySiteController();
const Router = express.Router();

Router.get("/discoverySite", isAuth, (req, res, next) =>
  discoverySiteController.getAll(req, res, next),
);
Router.post("/discoverySite/post", isAuth, (req, res, next) =>
  discoverySiteController.postdiscoverySite(req, res, next),
);
Router.put("discoverySite/update", isAuth, (req, res, next) =>
  discoverySiteController.update(req, res, next),
);
Router.get("/discoverySite/:id", isAuth, (req, res, next) =>
  discoverySiteController.getById(req, res, next),
);
Router.delete("discoverySite/delete/:id", isAuth, (req, res, next) =>
  discoverySiteController.softDeletediscoverySite(req, res, next),
);
Router.put("discoverySite/restore/:id", isAuth, (req, res, next) =>
  classificationController.destroyServices(req, res, next),
);

module.exports = Router;
