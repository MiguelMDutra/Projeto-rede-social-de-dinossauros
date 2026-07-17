"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Source extends Model {
    static associate(models) {
      Source.belongsToMany(models.Dinosaur, {
        through: models.DinosaurSource,
        foreignKey: "sourceId",
        otherKey: "dinosaurId",
        as: "dinosaur",
      });
    }
  }
  Source.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      type: DataTypes.STRING,
      url: DataTypes.STRING,
      doi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Source",
    },
  );
  return Source;
};
