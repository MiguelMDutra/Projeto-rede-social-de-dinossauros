"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Classifications", "genus");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Classifications");
  },
};
