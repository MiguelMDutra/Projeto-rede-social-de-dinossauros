"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Post.belongsTo(models.Dinosaur, {
        foreignKey: "dinosaurId",
        as: "dinosaur",
      });
      Post.hasMany(models.PostImage, {
        foreignKey: "postId",
        as: "images",
      });
      Post.hasMany(models.Comment, {
        foreignKey: "postId",
        as: "comments",
      });
      Post.hasMany(models.Like, {
        foreignKey: "postId",
        as: "likes",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      type: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      dinosaurId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    },
  );
  return Post;
};
