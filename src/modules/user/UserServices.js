const Services = require("../../core/services/Services");
const dataSource = require("../../db/models");

const bcrypt = require("bcrypt");

const model = dataSource["User"];

class UserServices extends Services {
  constructor() {
    super("User");
  }

  async getUsers(scope = {}, offset = 0, limit = 5) {
    const users = await model.findAll(
      scope,
      { offset: offset, limit: offset + limit },
      {
        attributes: {
          exclude: ["password"],
        },
      },
    );
    return users;
  }

  async getMyself(id) {
    return await model.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
  }

  async login(data) {
    const user = await model.findOne({
      where: { email: data.email },
    });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(data.password, user.password);
    if (!passwordValid) return null;
    return user;
  }
}

module.exports = UserServices;
