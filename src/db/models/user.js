"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Level, { foreignKey: "levelId", as: "level" });
      User.hasMany(models.Post, { foreignKey: "userId", as: "posts" });
      User.hasMany(models.Notification, {
        foreignKey: "userId",
        as: "notifications",
      });
      User.hasMany(models.Comment, { foreignKey: "userId", as: "comments" });
      User.hasMany(models.Like, { foreignKey: "userId", as: "likes" });
      User.belongsToMany(models.User, {
        through: models.Follow,
        foreignKey: "followerId",
        otherKey: "followingId",
        as: "following",
      });

      // Pessoas que seguem ESTE usuário
      User.belongsToMany(models.User, {
        through: models.Follow,
        foreignKey: "followingId",
        otherKey: "followerId",
        as: "followers",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
      profilePhoto: DataTypes.STRING,
      bio: DataTypes.TEXT,
      levelId: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
