"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Habitats",
      [
        {
          name: "Florestas",
          description:
            "Ambientes com vegetação densa e clima úmido, ricos em biodiversidade.",
          climate: "Temperado/Tropical",
          vegetation: "Árvores, samambaias e coníferas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Planícies",
          description:
            "Regiões abertas com relevo plano e ampla disponibilidade de alimento.",
          climate: "Temperado",
          vegetation: "Gramíneas e arbustos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Desertos",
          description:
            "Ambientes áridos com baixa precipitação e grande variação de temperatura.",
          climate: "Árido",
          vegetation: "Cactos e vegetação esparsa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pântanos",
          description: "Áreas alagadas de água doce com solo encharcado.",
          climate: "Úmido",
          vegetation: "Juncos, samambaias e plantas aquáticas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Costeiro",
          description:
            "Regiões próximas ao mar sujeitas à influência das marés.",
          climate: "Marítimo",
          vegetation: "Manguezais e vegetação costeira",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Montanhas",
          description:
            "Áreas elevadas com temperaturas mais baixas e relevo acidentado.",
          climate: "Frio",
          vegetation: "Coníferas e vegetação alpina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ilhas",
          description: "Ecossistemas isolados cercados por água.",
          climate: "Variado",
          vegetation: "Vegetação costeira e florestas insulares",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rios e Lagos",
          description:
            "Ecossistemas de água doce associados a cursos d'água e lagos.",
          climate: "Úmido",
          vegetation: "Plantas aquáticas e vegetação ciliar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Savanas",
          description:
            "Campos abertos com árvores espaçadas e estações secas bem definidas.",
          climate: "Tropical",
          vegetation: "Gramíneas e árvores esparsas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Habitats", null, {});
  },
};
