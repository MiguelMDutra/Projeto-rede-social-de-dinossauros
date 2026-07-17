const Unauthorized = require("../../core/errors/Unauthorized.js");
const verifyToken = require("./verifyToken.js");

function isAuth(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return next(new Unauthorized());
  }

  const token = auth.split(" ")[1];

  const payload = verifyToken(token);

  req.user = payload;

  next();
}

module.exports = isAuth;
