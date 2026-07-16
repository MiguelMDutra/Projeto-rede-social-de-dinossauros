const Forbidden = require("../Errors/Forbidden");

function isAdmin(req, res, next) {
  if (req.user.role != "admin") {
    next(new Forbidden());
  }
  next();
}

module.exports = isAdmin;
