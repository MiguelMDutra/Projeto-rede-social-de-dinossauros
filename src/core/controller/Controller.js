const { Op } = require("@sequelize/core");
const Conflict = require("../../Errors/Conflict.js");
const BadRequest = require("../../Errors/BadRequest.js");

class Controller {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res, next) {
    try {
      const response = await this.service.getAllServices();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await this.service.getById(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      const { name } = req.query;
      console.log(name);
      const response = await this.service.getByServices(
        {},
        { where: { name: { [Op.substring]: name } } },
      );
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params;
      const data = req.body;
      const [updated] = await this.service.updateServices(data, { id });
      if (updated) res.status(200).json("Atualizado com sucesso");
      else return;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
