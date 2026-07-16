const BaseError = require("../Errors/BaseError.js");

function ErrorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res
      .status(err.status || 500)
      .json({ message: err.message || "Erro do servidor" });
  }
}

module.exports = ErrorHandler;
