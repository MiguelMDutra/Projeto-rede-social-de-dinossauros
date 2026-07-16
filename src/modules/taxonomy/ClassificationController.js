const Controller = require("./Controller.js");
const ClassificationServices = require("./ClassificationServices.js");
const responseHelper = require("../../utils/response.helper.js");

const classificationServices = new ClassificationServices();

class ClassificationController extends Controller {
  constructor() {
    super(classificationServices);
  }
  async postClassification(req, res, next) {
    try {
      const data = req.body;
      const where = { family: data.family };
      const [created, isCreated] = await this.service.postServices(data, where);
      if (isCreated) {
        responseHelper(200, created);
      } else {
        next(new Conflict("O que você está tentando criar já existe."));
      }
    } catch (error) {
      next(error);
    }
  }

  async softDeleteClassification(req, res, next) {
    this.changeStatus(req, res, next, "destroy");
  }

  async restoreClassification(req, res, next) {
    this.changeStatus(req, res, next, "restore");
  }

  async changeStatus(req, res, next, action) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      await this.service.changeDeleteStatus(id, userId, action);

      responseHelper(200, {}, "Operação concluída com sucesso.");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ClassificationController;
