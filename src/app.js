const express = require("express");
const app = express();
const routes = require("./routes/mainRoutes.js");
const ErrorHandler = require("./middlewares/ErrorHandler.js");
const error404 = require("./middlewares/Error404.js");

routes(app);
app.use(error404);
app.use(ErrorHandler);

module.exports = app;
