"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Dinosaurs", "genus", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dinosaurs");
  },
};
