const Conflict = require("../Errors/Conflict.js");
const DinosaurServices = require("../services/DinosaurServices.js");
const Controller = require("./Controller.js");
const dinosaurServices = new DinosaurServices();

class DinosaurController extends Controller {
  constructor() {
    super(dinosaurServices);
  }

  async getPendingDinos(req, res, next) {
    try {
      const dinos = await dinosaurServices.getAllServices("pending");
      res.status(200).json(dinos);
    } catch (error) {
      next(error);
    }
  }
  async approvePendingDino(req, res, next) {
    try {
      const { genus } = req.body;
      const dinos = await dinosaurServices.updateServices(
        { status: "aprovado" },
        { where: { genus } },
        "pending",
      );
      res.status(200).json(dinos);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async disapprovePendingDino(req, res, next) {
    try {
      const { genus } = req.body;
      const dinos = await dinosaurServices.updateServices(
        { status: "negado" },
        { where: { genus } },
        "pending",
      );
      res.status(200).json(dinos);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async postDino(req, res, next) {
    try {
      const data = req.body;
      const [created, isCreated] = await this.service.postServices(data, {
        genus: data.genus,
        name: data.name,
      });
      if (isCreated) {
        res.status(200).json(created);
      } else {
        next(new Conflict("O dinossauro já existe"));
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = DinosaurController;
