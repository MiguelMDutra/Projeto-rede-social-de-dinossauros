'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classificacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reino: {
        type: Sequelize.STRING
      },
      filo: {
        type: Sequelize.STRING
      },
      classe: {
        type: Sequelize.STRING
      },
      ordem: {
        type: Sequelize.STRING
      },
      familia: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Classificacaos');
  }
};