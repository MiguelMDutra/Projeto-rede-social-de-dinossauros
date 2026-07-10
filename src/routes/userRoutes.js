const express = require("express");
const UserController = require("../controllers/UserController");

const userController = new UserController();

const Router = express.Router();

Router.get("/users", (req, res, next) => userController.getAll(req, res, next));
Router.post("/user/register", (req, res, next) =>
  userController.post(req, res, next),
);
Router.post("/user/login", (req, res, next) =>
  userController.login(req, res, next),
);

module.exports = Router;
