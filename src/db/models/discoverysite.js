"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiscoverySite extends Model {
    static associate(models) {
      DiscoverySite.hasMany(models.Dinosaur, {
        foreignKey: "siteId",
        as: "dinosaurs",
      });
    }
  }
  DiscoverySite.init(
    {
      localName: DataTypes.STRING,
      continent: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      coordinates: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "DiscoverySite",
    },
  );
  return DiscoverySite;
};
