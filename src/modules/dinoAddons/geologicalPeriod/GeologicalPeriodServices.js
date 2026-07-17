const Services = require("../../../core/services/Services.js");
const dataSource = require("../../../db/models/index.js");

const model = dataSource["GeologicalPeriods"];

class GeologicalPeriodServices extends Services {
  constructor() {
    super("GeologicalPeriods");
  }

  async createGeological(data) {
    return await model.findOrCreate({
      where: { name: data.name, startMa: data.startMa },
      default: { data },
    });
  }
}

module.export = GeologicalPeriodServices;
