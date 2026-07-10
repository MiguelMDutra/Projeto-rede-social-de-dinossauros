const Services = require("./Services");
const dataSource = require("../db/models");

const bcrypt = require("bcrypt");

class UserServices extends Services {
  constructor() {
    super("User");
  }

  async login(data) {
    const user = await User.findOne({
      where: { email: data.email },
    });

    if (!user) return null;

    const passwordValid = await bcrypt.compare(data.password, user.password);

    if (!passwordValid) return null;

    return user;
  }
}

module.exports = UserServices;
