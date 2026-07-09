"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Levels", [
      {
        name: "Novato",
        description: "Começando a contribuir com a comunidade.",
        min_points: 0,
        icon: "seedling",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pesquisador",
        description: "Contribuidor ativo da plataforma.",
        min_points: 100,
        icon: "search",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Especialista",
        description: "Possui diversas contribuições aprovadas.",
        min_points: 500,
        icon: "graduation-cap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paleontólogo",
        description: "Referência na comunidade.",
        min_points: 1500,
        icon: "award",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lenda",
        description: "Maior nível de reputação da plataforma.",
        min_points: 5000,
        icon: "crown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Levels", null, {});
  },
};
