"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "GeologicalPeriods",
      [
        {
          name: "Triássico",
          startMa: 252.17,
          endMa: 201.3,
          description: "Primeiro período da Era Mesozoica.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jurássico",
          startMa: 201.3,
          endMa: 145.0,
          description: "Segundo período da Era Mesozoica.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cretáceo",
          startMa: 145.0,
          endMa: 66.0,
          description: "Último período da Era Mesozoica.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("GeologicalPeriods", null, {});
  },
};
