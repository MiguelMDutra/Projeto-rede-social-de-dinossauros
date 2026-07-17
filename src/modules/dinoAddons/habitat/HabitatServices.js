const Services = require("../../../core/services/Services.js");
const dataSource = require("../../../db/models");

const Conflict = require("../../../core/Errors/Conflict.js");

const model = dataSource["Habitat"];

class HabitatServices extends Services {
  constructor() {
    super("Habitat");
  }

  async getAll(scope = "defaultScope", where) {
    const scopedModel = scope ? model.scope(scope) : model;
    const { name, description, climate, vegetation } = where;
    const whereHabitat = {};
    if (name) whereHabitat.name = name;
    if (description) whereHabitat.description = description;
    if (climate) whereHabitat.climate = climate;
    if (vegetation) whereHabitat.vegetation = vegetation;
    return await scopedModel.findAll({ where: whereHabitat });
  }

  async getUserHabitats(user) {
    return await model.scope(all).findAll({ where: { userId: user.id } });
  }

  async createHabitat(data) {
    const [habitat, created] = await model.findOrCreate({
      where: { name: data.name },
      default: {
        data,
      },
    });
    if (created) return habitat;
    else return new Conflict();
  }
}

module.exports = HabitatServices;
