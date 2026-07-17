"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GeologicalPeriod extends Model {
    static associate(models) {
      GeologicalPeriod.hasMany(models.Dinosaur, {
        foreignKey: "geologicalPeriodId",
        as: "dinosaurs",
      });

      GeologicalPeriod.belongsTo(models.User, {
        foreignKey: "userId",
        as: "creator",
      });
    }
  }
  GeologicalPeriod.init(
    {
      name: { type: DataTypes.STRING, unique: true },
      startMa: { type: DataTypes.FLOAT, unique: true },
      endMa: { type: DataTypes.FLOAT, unique: true },
      description: { type: DataTypes.TEXT, unique: true },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GeologicalPeriod",
    },
  );
  return GeologicalPeriod;
};
