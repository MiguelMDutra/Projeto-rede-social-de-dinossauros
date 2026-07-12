"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dinosaur extends Model {
    static associate(models) {
      Dinosaur.belongsTo(models.GeologicalPeriod, {
        foreignKey: "geologicalPeriodId",
        as: "period",
      });
      Dinosaur.belongsTo(models.Habitat, {
        foreignKey: "habitatId",
        as: "habitat",
      });
      Dinosaur.belongsTo(models.Classification, {
        foreignKey: "classificationId",
        as: "classification",
      });
      Dinosaur.belongsTo(models.DiscoverySite, {
        foreignKey: "siteId",
        as: "discoverySite",
      });
      Dinosaur.hasMany(models.Post, {
        foreignKey: "dinosaurId",
        as: "posts",
      });
      Dinosaur.hasMany(models.DinosaurSource, {
        foreignKey: "dinosaurId",
        as: "dinosaurSources",
      });

      Dinosaur.belongsToMany(models.Source, {
        through: models.DinosaurSource,
        foreignKey: "dinosaurId",
        otherKey: "sourceId",
        as: "sources",
      });
    }
  }
  Dinosaur.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      weightKg: DataTypes.FLOAT,
      heightM: DataTypes.FLOAT,
      lengthM: DataTypes.FLOAT,
      mainImage: DataTypes.STRING,
      status: DataTypes.STRING,
      creatorUserId: DataTypes.INTEGER,
      habitatId: DataTypes.INTEGER,
      classificationId: DataTypes.INTEGER,
      siteId: DataTypes.INTEGER,
      genus: DataTypes.STRING,
      geologicalPeriodId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dinosaur",
      defaultScope: { where: { status: "aprovado" } },
      scopes: {
        pending: { where: { status: "pendente" } },
        negado: { where: { status: "negado" } },
      },
      hooks: {
        beforeCreate: async (dino) => {
          dino.status = "pendente";
        },
      },
    },
  );
  return Dinosaur;
};
