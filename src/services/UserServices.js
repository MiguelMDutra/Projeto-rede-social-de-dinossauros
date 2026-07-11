const Services = require("./Services");
const dataSource = require("../db/models");

const bcrypt = require("bcrypt");

class UserServices extends Services {
  constructor() {
    super("User");
  }

  async login(data) {
    const user = await dataSource["User"].findOne({
      where: { email: data.email },
    });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(data.password, user.password);
    if (!passwordValid) return null;
    return user;
  }

  async getMyself(id) {
    console.log("getMyself");
    return await dataSource["User"].findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
  }
}

module.exports = UserServices;
