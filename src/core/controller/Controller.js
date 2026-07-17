const { Op } = require("@sequelize/core");
const Conflict = require("../Errors/Conflict");
const BadRequest = require("../Errors/BadRequest");
const responseHelper = require("../../utils/response.helper.js");

class Controller {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res, next) {
    try {
      const response = await this.service.getAll(req.query);
      responseHelper(res, 200, response);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await this.service.getById(id);
      responseHelper(res, 200, response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params;
      const data = req.body;
      const [updated] = await this.service.updateServices(data, { id });
      if (updated) responseHelper(res, 200, "", "Atualizado com sucesso");
      else return;
    } catch (error) {
      next(error);
    }
  }

  async changeStatus(req, res, next, action) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      await this.service.changeDeleteStatus(id, userId, action);

      responseHelper(res, 200, {}, "Operação concluída com sucesso.");
    } catch (error) {
      next(error);
    }
  }

  async softDelete(req, res, next) {
    return this.service.changeStatus(req, res, next, "destroy");
  }

  async restore(req, res, next) {
    return this.service.changeStatus(req, res, next, "restore");
  }
}

module.exports = Controller;
