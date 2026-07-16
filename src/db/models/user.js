"use strict";
const { Model, where } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Level, { foreignKey: "levelId", as: "Levels" });
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
      User.belongsToMany(models.User, {
        through: models.Follow,
        foreignKey: "followingId",
        otherKey: "followerId",
        as: "followers",
      });
      User.hasMany(models.Classification, {
        foreignKey: "userId",
        as: "classifications",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "Todos temos nome, não precisa ter vergonha!",
          },
          len: {
            args: [3, 100],
            msg: "O nome deve ter no mínimo 3 caracteres e no máximo 100",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        notEmpty: true,
        unique: true,
        validate: {
          isEmail: {
            msg: "Digite um email válido.",
          },
          notEmpty: {
            msg: "O email é necessário.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        notEmpty: true,
        validate: {
          notEmpty: {
            msg: "A senha é muito importante",
          },
          len: {
            args: [8, 100],
            msg: "A senha deve ter no mínimo 8 caracteres e no máximo 100",
          },
        },
      },
      pfp: DataTypes.STRING,
      bio: DataTypes.TEXT,
      levelId: { type: DataTypes.INTEGER, defaultValue: 1 },
      points: { type: DataTypes.INTEGER, defaultValue: 0 },
      role: { type: DataTypes.STRING, values: ["user", "admin"] },
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: { where: { active: true } },
      hooks: {
        beforeCreate: async (user) => {
          const bcrypt = require("bcrypt");
          user.password = await bcrypt.hash(user.password, 12);
        },
      },
    },
  );
  return User;
};
