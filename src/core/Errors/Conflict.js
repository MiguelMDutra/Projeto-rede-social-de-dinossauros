const BaseError = require("./BaseError.js");

class Conflict extends BaseError {
  constructor(message, status) {
    super(message || "O email já foi cadastrado", 409);
  }
}

module.exports = Conflict;
