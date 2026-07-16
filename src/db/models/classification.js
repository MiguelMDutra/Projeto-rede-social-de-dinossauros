"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classification extends Model {
    static associate(models) {
      Classification.hasMany(models.Dinosaur, {
        foreignKey: "classificationId",
        as: "dinosaurs",
      });
      Classification.belongsTo(models.User, {
        foreignKey: "userId",
        as: "creator",
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
        type: DataTypes.ENUM("carnivoro", "herbivoro", "onivoro"),
      },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Classification",
      scopes: { users: "userId" },
      paranoid: true,
    },
  );
  return Classification;
};
