const Controller = require("./Controller.js");
const UserServices = require("../services/UserServices.js");
const userServices = new UserServices();
const Unauthorized = require("../errors/Unauthorized.js");
const createJWT = require("../Auth/createJWT.js");
const Conflict = require("../Errors/Conflict.js");

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async signUp(req, res, next) {
    try {
      const userData = req.body;
      const [created, isCreated] = await this.service.postServices(userData);
      if (isCreated) {
        const token = createJWT(created);
        res.status(200).json(token);
      } else {
        next(new Conflict());
      }
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const user = await userServices.login(req.body);
      if (!user) {
        return next(new Unauthorized("Email ou senha errados"));
      } else {
        const token = createJWT(user);
        return res.status(200).json(token);
      }
    } catch (error) {
      next(error);
    }
  }

  async myAccount(req, res, next) {
    try {
      const user = await userServices.getMyself(req.user.id);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
