"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GeologicalPeriod extends Model {
    static associate(models) {
      GeologicalPeriod.hasMany(models.Dinosaur, {
        forkeignKey: "geologicalPeriodId",
        as: "dinossaurs",
      });
    }
  }
  GeologicalPeriod.init(
    {
      name: DataTypes.STRING,
      startMa: DataTypes.FLOAT,
      endMa: DataTypes.FLOAT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "GeologicalPeriod",
    },
  );
  return GeologicalPeriod;
};
