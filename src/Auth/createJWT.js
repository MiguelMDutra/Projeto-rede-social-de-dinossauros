var jwt = require("jsonwebtoken");

module.exports = (user) =>
  jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

//adicionar o refresh token dps
