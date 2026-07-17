const Controller = require("../../core/controller/Controller.js");
const UserServices = require("./UserServices.js");

const userServices = new UserServices();

const Unauthorized = require("../../core/Errors/Unauthorized.js");
const Conflict = require("../../core/Errors/Conflict.js");

const createJWT = require("../Auth/createJWT.js");
const verifyToken = require("../Auth/verifyToken.js");

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async getUsers(req, res, next) {
    try {
      const { offset, limit } = req.query;
      const response = await userServices.getUsers({}, offset, limit);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
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

  async signUp(req, res, next) {
    try {
      const userData = req.body;
      const [user, isCreated] = await userServices.postServices(userData, {
        email: userData.email,
      });
      if (isCreated) {
        const token = createJWT(user);
        res.status(201).json(token);
      } else {
        next(new Conflict());
      }
    } catch (error) {
      console.log(error);
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
}

module.exports = UserController;
