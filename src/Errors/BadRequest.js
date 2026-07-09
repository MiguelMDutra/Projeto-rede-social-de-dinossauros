const BaseError = require("./BaseError.js");

class BadRequest extends BaseError {
  constructor(message, status) {
    super(message, 400);
  }
}

module.exports = BadRequest;
