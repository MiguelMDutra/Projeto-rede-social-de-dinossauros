"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Likes.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Likes.belongsTo(models.Post, { foreignKey: "postId", as: "post" });
    }
  }
  Like.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Like",
    },
  );
  return Like;
};
