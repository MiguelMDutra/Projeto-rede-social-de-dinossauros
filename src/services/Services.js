const dataSource = require("../db/models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllServices() {
    return await dataSource[this.model].findAll();
  }

  async postServices(data) {
    return await dataSource[this.model].findOrCreate({
      where: {
        email: data.email,
      },
      defaults: data,
    });
  }
}

module.exports = Services;
