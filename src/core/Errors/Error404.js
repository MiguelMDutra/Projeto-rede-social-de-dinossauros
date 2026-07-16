const BaseError = require("./BaseError.js");

class Error404 extends BaseError {
  constructor(message, status) {
    super(message || "Não conseguimos achar isso... desculpa", 404);
  }
}

module.exports = Error404;
