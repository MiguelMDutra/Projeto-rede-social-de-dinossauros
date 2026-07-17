"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Habitat extends Model {
    static associate(models) {
      Habitat.hasMany(models.Dinosaur, {
        foreignKey: "habitatId",
        as: "dinosaurs",
      });
      Habitat.belongsTo(models.User, { foreignKey: "userId", as: "creator" });
    }
  }
  Habitat.init(
    {
      name: { type: DataTypes.STRING, unique: true },
      description: DataTypes.TEXT,
      climate: DataTypes.STRING,
      vegetation: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM("Approved", "Pending", "Rejected"),
        defaultValue: "Pending",
      },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Habitat",
      defaultScope: { where: { status: "Approved" } },
      scopes: {
        pending: { where: { status: "Pending" } },
        rejected: { where: { status: "Rejected" } },
        all: {},
      },
    },
  );
  return Habitat;
};
