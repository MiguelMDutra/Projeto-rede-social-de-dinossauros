const dataSource = require("../../db/models");
const Unauthorized = require("../Errors/Unauthorized");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllServices(scope = {}, options = {}) {
    const modelS = scope
      ? dataSource[this.model].scope(scope)
      : dataSource[this.model];
    return await modelS.findAll(options);
  }

  async getById(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async postServices(data, where) {
    return await dataSource[this.model].findOrCreate({
      where,
      defaults: data,
    });
  }

  async updateServices(data, where, scope) {
    const modelS = scope
      ? dataSource[this.model].scope(scope)
      : dataSource[this.model];
    return await modelS.update(data, where);
  }

  async changeDeleteStatus(id, userId, method) {
    const response = await dataSource[this.model].findByPk(id);

    console.log(response.id);
    console.log(userId);

    if (!response) {
      throw new NotFound();
    }

    if ("userId" in response) {
      if (response.userId !== userId) {
        throw new Unauthorized("Você só pode apagar o seu conteúdo.");
      }
    } else {
      if (response.id !== userId) {
        throw new Unauthorized("Você só pode desativar o seu perfil.");
      }
    }

    return await response[method]();
  }

  async destroyServices(id) {
    return await dataSource[this.model].destroy(id);
  }
  async restoreServices(id) {
    return await dataSource[this.model].restore(id);
  }
}

module.exports = Services;
