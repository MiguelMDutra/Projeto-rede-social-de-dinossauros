const Controller = require("./Controller.js");
const UserServices = require("../services/UserServices.js");
const userServices = new UserServices();

const Unauthorized = require("../errors/Unauthorized.js");

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async login(req, res, next) {
    try {
      const response = await userServices.login(req.body);
      if (response === false || response === undefined) {
        next(new Unauthorized("Email ou senha errados"));
      } else {
        res.status(200).json({ message: "bora porra" });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
