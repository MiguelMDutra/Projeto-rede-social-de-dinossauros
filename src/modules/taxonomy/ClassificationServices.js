const BadRequest = require("../../core/Errors/BadRequest.js");
const Services = require("../../core/services/Services.js");
const Unauthorized = require("../../core/Errors/Unauthorized.js");

const model = dataSource["Classification"];
class ClassificationServices extends Services {
  constructor() {
    super("Classification");
  }

  async postClassification(data, where) {
    const diets = ["carnivoro", "herbivoro", "onivoro"];

    if (!diets.includes(data.diet)) {
      throw new BadRequest(
        "Dieta inválida -> As dietas válidas são: 'carnivoro', 'herbivoro', 'onivoro' ",
      );
    }
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
