"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dinosaurs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      weightKg: {
        type: Sequelize.FLOAT,
      },
      heightM: {
        type: Sequelize.FLOAT,
      },
      lengthM: {
        type: Sequelize.FLOAT,
      },
      mainImage: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
        values: ["aprovado", "pendente", "negado"],
        defaultValue: "pendente",
      },
      creatorUserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      habitatId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Habitats",
          key: "id",
        },
      },
      classificationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Classifications",
          key: "id",
        },
      },
      siteId: {
        type: Sequelize.INTEGER,
        references: {
          model: "DiscoverySites",
          key: "id",
        },
      },
      geologicalPeriodId: {
        type: Sequelize.INTEGER,
        references: {
          model: "GeologicalPeriods",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dinosaurs");
  },
};
