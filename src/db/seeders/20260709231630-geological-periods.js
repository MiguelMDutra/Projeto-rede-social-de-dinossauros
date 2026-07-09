"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    ("GeologicalPeriods",
      [
        {
          name: "Novato",
          description: "Começando a contribuir com a comunidade.",
          minPoints: 0,
          icon: "seedling",
        },
        {
          name: "Pesquisador",
          description: "Contribuidor ativo da plataforma.",
          minPoints: 100,
          icon: "search",
        },
        {
          name: "Especialista",
          description: "Possui diversas contribuições aprovadas.",
          minPoints: 500,
          icon: "graduation-cap",
        },
        {
          name: "Paleontólogo",
          description: "Referência na comunidade.",
          minPoints: 1500,
          icon: "award",
        },
        {
          name: "Lenda",
          description: "Maior nível de reputação da plataforma.",
          minPoints: 5000,
          icon: "crown",
        },
      ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GeologicalPeriods", null, {});
  },
};
