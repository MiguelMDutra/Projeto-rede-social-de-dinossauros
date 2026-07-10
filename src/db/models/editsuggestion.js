"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EditSuggestion extends Model {
    static associate(models) {
      EditSuggestion.belongsTo(models.User, {
        foreignKey: "usuario_id",
        as: "users",
      });
      EditSuggestion.belongsTo(models.Dinosaur, {
        foreignKey: "dinosaur_id",
        as: "dinossaur",
      });
    }
  }
  EditSuggestion.init(
    {
      dinosaurId: DataTypes.INTEGER,
      field: DataTypes.STRING,
      oldValue: DataTypes.TEXT,
      suggestedValue: DataTypes.TEXT,
      reason: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EditSuggestion",
    },
  );
  return EditSuggestion;
};
