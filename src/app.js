const express = require("express");
const app = express();
const routes = require("./core/routes/mainRoutes.js");
const ErrorHandler = require("./core/middlewares/ErrorHandler.js");
const error404 = require("./core/middlewares/Error404.js");

routes(app);
app.use(error404);
app.use(ErrorHandler);

module.exports = app;
