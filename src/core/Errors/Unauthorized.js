const BaseError = require("./BaseError.js");

class Unauthorized extends BaseError {
  constructor(message, status) {
    super(message || "Nós te conhecemos? faça login, rapaz!", 401);
  }
}

module.exports = Unauthorized;
