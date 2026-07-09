"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      Level.hasMany(models.User, { foreignKey: "levelId", as: "users" });
    }
  }
  Level.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      minPoints: DataTypes.INTEGER,
      icon: DataTypes.STRING,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Level",
    },
  );
  return Level;
};
