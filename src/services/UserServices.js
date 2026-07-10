const Services = require("./Services");
const dataSource = require("../db/models");

const bcrypt = require("bcrypt");

class UserServices extends Services {
  constructor() {
    super("User");
  }

  login(data) {
    const user = dataSource["User"].findOne({
      where: { email: data.email },
    });
    if (user)
      return bcrypt.compare(user.password, 12, function (err, result) {});
    else return false;
  }
}

module.exports = UserServices;
