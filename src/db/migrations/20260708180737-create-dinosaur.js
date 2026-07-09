'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dinosaurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      weightKg: {
        type: Sequelize.FLOAT
      },
      heightM: {
        type: Sequelize.FLOAT
      },
      lengthM: {
        type: Sequelize.FLOAT
      },
      mainImage: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      creatorUserId: {
        type: Sequelize.INTEGER
      },
      periodId: {
        type: Sequelize.INTEGER
      },
      habitatId: {
        type: Sequelize.INTEGER
      },
      classificationId: {
        type: Sequelize.INTEGER
      },
      siteId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dinosaurs');
  }
};