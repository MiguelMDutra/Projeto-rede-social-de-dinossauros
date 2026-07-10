const Conflict = require("../Errors/Conflict");

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

  async post(req, res, next) {
    try {
      const data = req.body;
      const [created, isCreated] = await this.service.postServices(data);
      if (isCreated) {
        res.status(200).json(created);
      } else {
        next(new Conflict());
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
