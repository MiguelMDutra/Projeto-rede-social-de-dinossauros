const BadRequest = require("../../../core/Errors/BadRequest.js");
const Services = require("../../../core/services/Services.js");
const Unauthorized = require("../../../core/Errors/Unauthorized.js");
const dataSource = require("../../../db/models");

const model = dataSource["Classification"];
class ClassificationServices extends Services {
  constructor() {
    super("Classification");
  }

  async getAll(scope = "defaultScope", where) {
    const scopedModel = scope ? model.scope(scope) : model;
    const { kingdom, phylum, class: className, order, family, diet } = where;
    const whereClassification = {};
    if (kingdom) whereClassification.kingdom = kingdom;
    if (phylum) whereClassification.phylum = phylum;
    if (className) whereClassification.className = className;
    if (order) whereClassification.order = order;
    if (family) whereClassification.family = family;
    if (diet) whereClassification.diet = diet;
    return await scopedModel.findAll({ where: whereClassification });
  }

  async postClassification(data, where) {
    return await model.findOrCreate({
      where,
      defaults: data,
    });
  }

  async changeDeleteStatus(id, userId, method) {
    const classification = await model.findByPk(id);

    if (!classification) {
      throw new NotFound();
    }

    if (classification.userId !== userId) {
      throw new Unauthorized();
    }

    return await classification[method]();
  }
}

module.exports = ClassificationServices;
