"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classification extends Model {
    static associate(models) {
      Classification.hasMany(models.Dinosaur, {
        foreignKey: "classificationId",
        as: "dinosaurs",
      });
    }
  }
  Classification.init(
    {
      kingdom: DataTypes.STRING,
      phylum: DataTypes.STRING,
      class: DataTypes.STRING,
      order: DataTypes.STRING,
      family: DataTypes.STRING,
      diet: {
        type: DataTypes.STRING,
        values: ["carnivoro", "herbivoro", "onivoro"],
      },
    },
    {
      sequelize,
      modelName: "Classification",
    },
  );
  return Classification;
};
