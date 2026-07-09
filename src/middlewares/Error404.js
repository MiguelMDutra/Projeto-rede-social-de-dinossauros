const Error404 = require("../Errors/Error404.js");

function error404(req, res, next) {
  next(new Error404("Rota não encontrada"));
}

module.exports = error404;
