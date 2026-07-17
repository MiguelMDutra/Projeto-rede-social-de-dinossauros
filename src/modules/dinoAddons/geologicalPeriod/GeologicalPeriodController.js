const GeologicalPeriodServices = require("./GeologicalPeriodServices.js");
const Controller = require("../../../core/controller/Controller.js");

const geologicalPeriodServices = new GeologicalPeriodServices();

class GeologicalPeriodController extends Controller {
  constructor() {
    super(geologicalPeriodServices);
  }

  async createGeological(req, res, next) {
    try {
      const data = req.body;
      const [geologicPeriod, isCreated] =
        await this.service.createGeological(data);
      if (isCreated) {
        responseHelper(res, 200, response);
      } else {
        next(new Conflict("O que você está tentando criar já existe."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GeologicalPeriodController;
