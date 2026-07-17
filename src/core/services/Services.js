const dataSource = require("../../db/models");

const model = dataSource[this.model];

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllServices(scope = {}, options = {}) {
    const modelS = scope ? model.scope(scope) : model;
    return await modelS.findAll(options);
  }

  async getById(id) {
    return await model.findByPk(id);
  }

  async postServices(data, where) {
    return await model.findOrCreate({
      where,
      defaults: data,
    });
  }

  async updateServices(data, where, scope) {
    const modelS = scope ? model.scope(scope) : model;
    return await modelS.update(data, where);
  }

  async changeDeleteStatus(id, userId, method) {
    const response = await model.findByPk(id);

    if (!response) {
      throw new NotFound();
    }

    if ("userId" in response) {
      if (response.userId !== userId) {
        throw new Unauthorized();
      }
    } else {
      if (response.id !== userId) {
        throw new Unauthorized();
      }
    }

    return await response[method]();
  }

  async destroyServices(id) {
    return await model.destroy(id);
  }
  async restoreServices(id) {
    return await model.restore(id);
  }
}

module.exports = Services;
