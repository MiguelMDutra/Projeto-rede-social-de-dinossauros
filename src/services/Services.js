const dataSource = require("../db/models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllServices(scope = {}, options = {}) {
    const model = scope
      ? dataSource[this.model].scope(scope)
      : dataSource[this.model];

    return await model.findAll(options);
  }

  async getById(id) {
    return await model.findByPk(id);
  }

  async postServices(data, where = {}) {
    return await dataSource[this.model].findOrCreate({
      where,
      defaults: data,
    });
  }

  async updateServices(data, where, scope) {
    const model = scope
      ? dataSource[this.model].scope(scope)
      : dataSource[this.model];
    return await model.update(data, where);
  }
}

module.exports = Services;
