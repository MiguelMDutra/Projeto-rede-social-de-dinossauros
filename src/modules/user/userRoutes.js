const express = require("express");
const UserController = require("./UserController.js");
const isAuth = require("../Auth/isAuth");
const userController = new UserController();

const Router = express.Router();

Router.get("/users", (req, res, next) =>
  userController.getUsers(req, res, next),
);
Router.get("/users/me", isAuth, (req, res, next) =>
  userController.myAccount(req, res, next),
);
Router.post("/user/register", (req, res, next) =>
  userController.signUp(req, res, next),
);
Router.post("/user/login", (req, res, next) =>
  userController.login(req, res, next),
);

Router.get("/users/:id", (req, res, next) =>
  userController.getById(req, res, next),
);

Router.put("/user/deactivate/:id", (req, res, next) =>
  userController.softDelete(req, res, next),
);

Router.put("/user/restore/:id", (req, res, next) =>
  userController.restore(req, res, next),
);

module.exports = Router;
