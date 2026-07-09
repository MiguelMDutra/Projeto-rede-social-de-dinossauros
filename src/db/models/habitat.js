"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Habitat extends Model {
    static associate(models) {
      Habitat.hasMany(models.Dinosaur, {
        foreignKey: "habitatId",
        as: "dinosaurs",
      });
    }
  }
  Habitat.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      climate: DataTypes.STRING,
      vegetation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Habitat",
    },
  );
  return Habitat;
};
