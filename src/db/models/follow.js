"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate(models) {
      Follow.belongsTo(models.User, {
        foreignKey: "followerId",
        as: "follower",
      });
      Follow.belongsTo(models.User, {
        foreignKey: "followingId",
        as: "following",
      });
    }
  }
  Follow.init(
    {
      followerId: DataTypes.INTEGER,
      followingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Follow",
    },
  );
  return Follow;
};
