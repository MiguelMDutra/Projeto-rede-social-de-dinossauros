const Services = require("../../core/services/Services");
const dataSource = require("../../db/models");

const model = dataSource["Dinosaur"];

class DinosaurServices extends Services {
  constructor() {
    super("Dinosaur");
  }

  async getDinosBy(query) {
    const { name, genus, family, order, diet, period, habitat } = query;
    const where = {};
    const classificationWhere = {};
    const periodWhere = {};
    const habitatWhere = {};
    if (name) where.name = name;
    if (genus) where.genus = genus;
    if (family) classificationWhere.family = family;
    if (order) classificationWhere.order = order;
    if (diet) classificationWhere.diet = diet;
    if (period) periodWhere.period = period;
    if (habitat) habitatWhere.habitat = habitat;

    const classificationInclude = {
      model: dataSource["Classification"],
      as: "classification",
    };

    if (Object.keys(classificationWhere).length > 0) {
      classificationInclude.where = classificationWhere;
    }

    const periodInclude = {
      model: dataSource["GeologicalPeriod"],
      as: "period",
    };

    if (Object.keys(periodWhere).length > 0) {
      periodInclude.where = periodWhere;
    }

    const habitatInclude = {
      model: dataSource["Habitat"],
      as: "habitat",
    };

    if (Object.keys(habitatWhere).length > 0) {
      habitatInclude.where = habitatWhere;
    }

    const userInclude = {
      model: dataSource["User"],
      attributes: ["id", "name"],
      as: "user",
    };

    return await dataSource["Dinosaur"].findAll({
      where,
      include: [
        classificationInclude,
        periodInclude,
        habitatInclude,
        userInclude,
      ],
    });
  }

  async postDino(data) {
    return await model.findOrCreate({
      where: { genus: data.genus },
      default: { data },
    });
  }
}

module.exports = DinosaurServices;
