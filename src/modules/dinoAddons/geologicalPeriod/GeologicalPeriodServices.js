const Services = require("../../../core/services/Services.js");
const dataSource = require("../../../db/models/index.js");

class GeologicalPeriodServices extends Services {
  constructor() {
    super("GeologicalPeriod");
  }

  async getAll(scope = "defaultScope", where) {
    const scopedModel = scope
      ? dataSource["GeologicalPeriod"].scope(scope)
      : dataSource["GeologicalPeriod"];
    const { name, startMa, endMa, description } = where;
    const whereGeological = {};
    if (name) whereGeological.name = name;
    if (startMa) whereGeological.startMa = startMa;
    if (endMa) whereGeological.endMa = endMa;
    if (description) whereGeological.description = description;
    return await scopedModel.findAll({ where: whereGeological });
  }

  async createGeological(data) {
    return await dataSource["GeologicalPeriod"].findOrCreate({
      where: { name: data.name, startMa: data.startMa },
      default: { data },
    });
  }
}

module.exports = GeologicalPeriodServices;
