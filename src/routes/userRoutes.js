const express = require("express");
const UserController = require("../controllers/UserController");
const isAuth = require("../Auth/isAuth");
const userController = new UserController();

const Router = express.Router();

Router.get("/users", (req, res, next) => userController.getAll(req, res, next));
Router.get("/users/me", isAuth, (req, res, next) =>
  userController.myAccount(req, res, next),
);
Router.post("/user/register", (req, res, next) =>
  userController.signUp(req, res, next),
);
Router.post("/user/login", (req, res, next) =>
  userController.login(req, res, next),
);

Router.put("/user/deactivate", (req, res, next) =>
  userController.deactivateAccount(req, res, next),
);

module.exports = Router;
