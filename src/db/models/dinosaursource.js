"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DinosaurSource extends Model {
    static associate(models) {
      DinosaurSource.belongsTo(models.Dinosaur, {
        foreignKey: "dinosaurId",
        as: "dinosaur",
      });
      DinosaurSource.belongsTo(models.Source, {
        foreignKey: "sourceId",
        as: "source",
      });
    }
  }
  DinosaurSource.init(
    {
      dinosaurId: DataTypes.INTEGER,
      sourceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DinosaurSource",
    },
  );
  return DinosaurSource;
};
