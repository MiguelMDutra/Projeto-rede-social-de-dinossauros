const Conflict = require("../../core/Errors/Conflict");
const BadRequest = require("../../core/Errors/BadRequest");
const DinosaurServices = require("./DinosaurServices");
const Controller = require("../../core/controller/Controller");
const dinosaurServices = new DinosaurServices();

class DinosaurController extends Controller {
  constructor() {
    super(dinosaurServices);
  }

  async getAll(req, res, next) {
    try {
      const query = req.query;
      console.log(query);
      const dinos = await dinosaurServices.getDinosBy(query);
      res.status(200).json(dinos);
    } catch (error) {
      next(error);
    }
  }

  async getPendingDinos(req, res, next) {
    try {
      const dinos = await dinosaurServices.getAllServices("pending");
      res.status(200).json(dinos);
    } catch (error) {
      next(error);
    }
  }

  async postDino(req, res, next) {
    try {
      const data = req.body;
      const [created, isCreated] = await dinosaurServices.postDino(data);
      if (isCreated) {
        console.log("criado");
        res.status(200).json(created);
      } else {
        next(new Conflict("O dinossauro já existe"));
      }
    } catch (error) {
      next(error);
    }
  }

  async approvePendingDino(req, res, next) {
    try {
      const id = req.params;
      const dinos = await dinosaurServices.updateServices(
        { status: "aprovado" },
        { where: id },
        "pending",
      );
      if (dinos[0] == 0) {
        next(new BadRequest("Dinossauro não existe no banco"));
      }
      res.status(200).json("alterado com sucesso");
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async disapprovePendingDino(req, res, next) {
    try {
      const id = req.params;
      const dinos = await dinosaurServices.updateServices(
        { status: "negado" },
        { where: id },
        "pending",
      );
      res.status(200).json(dinos);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = DinosaurController;
