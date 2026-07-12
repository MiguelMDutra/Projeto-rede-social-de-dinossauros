"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("DiscoverySites", [
      {
        localName: "Hell Creek Formation",
        continent: "América do Norte",
        country: "Estados Unidos",
        state: "Montana",
        city: "Jordan",
        coordinates: "47.3200, -106.9100",
        description:
          "Formação geológica famosa por fósseis de Tyrannosaurus rex e Triceratops.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localName: "Flaming Cliffs",
        continent: "Ásia",
        country: "Mongólia",
        state: "Ömnögovi",
        city: "Dalanzadgad",
        coordinates: "43.5000, 103.7000",
        description:
          "Local onde foram encontrados fósseis de Velociraptor e ovos de dinossauro.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localName: "Morrison Formation",
        continent: "América do Norte",
        country: "Estados Unidos",
        state: "Colorado",
        city: "Cañon City",
        coordinates: "38.4400, -105.2400",
        description:
          "Importante formação do Jurássico com fósseis de Stegosaurus e Brachiosaurus.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localName: "Ischigualasto Provincial Park",
        continent: "América do Sul",
        country: "Argentina",
        state: "San Juan",
        city: "Valle Fértil",
        coordinates: "-30.0000, -68.0000",
        description:
          "Conhecido como Vale da Lua, possui alguns dos dinossauros mais antigos já descobertos.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        localName: "Araripe Basin",
        continent: "América do Sul",
        country: "Brasil",
        state: "Ceará",
        city: "Santana do Cariri",
        coordinates: "-7.1800, -39.7400",
        description:
          "Importante sítio fossilífero brasileiro com fósseis excepcionalmente preservados.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("DiscoverySites", null, {});
  },
};
