"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      Notification.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }
  Notification.init(
    {
      userId: DataTypes.INTEGER,
      actorId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      entityType: DataTypes.STRING,
      entityId: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      isRead: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Notification",
    },
  );
  return Notification;
};
