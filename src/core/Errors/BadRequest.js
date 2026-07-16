const BaseError = require("./BaseError.js");

class BadRequest extends BaseError {
  constructor(message, status) {
    super(message || "Dados incompletos, preencha novamente", 400);
  }
}

module.exports = BadRequest;
