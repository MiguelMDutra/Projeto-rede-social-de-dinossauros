const Controller = require("../../../core/controller/Controller.js");
const HabitatServices = require("./HabitatServices.js");
const responseHelper = require("../../../utils/response.helper.js");

const habitatServices = new HabitatServices();

class HabitatController extends Controller {
  constructor() {
    super(habitatServices);
  }

  async getUserHabitats(req, res, next) {
    const user = req.user;
    try {
      const response = await habitatServices.getUserHabitats(user);
      responseHelper(res, 200, response);
    } catch (error) {
      next(error);
    }
  }

  async createHabitat(req, res, next) {
    try {
      const data = req.body;
      const habitat = await habitatServices.createHabitat({}, data);
      responseHelper(res, 201, habitat);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HabitatController;
