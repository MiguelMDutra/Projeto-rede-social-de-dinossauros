const express = require("express");
const app = express();
const ErrorHandler = require("./middlewares/ErrorHandler.js");
const error404 = require("./middlewares/Error404.js");

app.use(express.json());
app.use(error404);
app.use(ErrorHandler);

module.exports = app;
