"use strict";

const bcrypt = require("bcrypt");

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface) {
    const password = await bcrypt.hash("12345678", 12);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Administrador",
          email: "admin@museu.com",
          password,
          pfp: null,
          bio: "Administrador da plataforma.",
          levelId: 1,
          points: 0,
          role: "admin",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miguel",
          email: "miguel@email.com",
          password,
          pfp: null,
          bio: "Apaixonado por paleontologia.",
          levelId: 1,
          points: 0,
          role: "user",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
