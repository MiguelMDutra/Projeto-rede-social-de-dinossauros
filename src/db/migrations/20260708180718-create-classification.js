"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kingdom: {
        type: Sequelize.STRING,
      },
      phylum: {
        type: Sequelize.STRING,
      },
      class: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.STRING,
      },
      family: {
        type: Sequelize.STRING,
      },
      genus: {
        type: Sequelize.STRING,
      },
      diet: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
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
    await queryInterface.dropTable("Classifications");
  },
};
