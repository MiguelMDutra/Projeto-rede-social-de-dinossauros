"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GeologicalPeriod extends Model {
    static associate(models) {
      GeologicalPeriod.hasMany(models.Dinosaur, {
        foreignKey: "geologicalPeriodId",
        as: "dinosaurs",
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
