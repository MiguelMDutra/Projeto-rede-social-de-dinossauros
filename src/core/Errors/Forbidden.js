const BaseError = require("./BaseError.js");

class Forbidden extends BaseError {
  constructor(message, status) {
    super(message || "Você não tem a permissão necessária", 403);
  }
}

module.exports = Forbidden;
