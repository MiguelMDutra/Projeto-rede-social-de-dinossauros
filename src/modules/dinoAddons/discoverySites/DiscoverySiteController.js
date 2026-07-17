const Controller = require("../../../core/controller/Controller.js");
const DiscoverySiteServices = require("./DiscoverySiteServices.js");
const responseHelper = require("../../../utils/response.helper.js");

const discoverySiteServices = new DiscoverySiteServices();

class DiscoverySiteController extends Controller {
  constructor() {
    super(discoverySiteServices);
  }
  async postDiscoverySite(req, res, next) {
    try {
      const data = req.body;
      const [created, isCreated] =
        await discoverySiteServices.postServices(data);
      if (isCreated) {
        responseHelper(200, created);
      } else {
        next(new Conflict("O que você está tentando criar já existe."));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DiscoverySiteController;
