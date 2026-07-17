const BadRequest = require("../../../core/Errors/BadRequest.js");
const Services = require("../../../core/services/Services.js");
const Unauthorized = require("../../../core/Errors/Unauthorized.js");
const dataSource = require("../../../db/models/index.js");

const model = dataSource["Classification"];
class ClassificationServices extends Services {
  constructor() {
    super("Classification");
  }

  async getAll(scope = "defaultScope", where) {
    const scopedModel = scope ? model.scope(scope) : model;
    const {
      localName,
      continent,
      country,
      state,
      city,
      coordinates,
      description,
    } = where;
    const whereClassification = {};
    if (localName) whereClassification.localName = localName;
    if (continent) whereClassification.continent = continent;
    if (country) whereClassification.country = country;
    if (state) whereClassification.state = state;
    if (city) whereClassification.city = city;
    if (coordinates) whereClassification.coordinates = coordinates;
    if (description) whereClassification.description = description;
    return await scopedModel.findAll({ where: whereClassification });
  }

  async postDiscoverySite(data) {
    return await model.findOrCreate({
      where: { localName: data.localName },
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
