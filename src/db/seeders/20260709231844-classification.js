"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Classifications",
      [
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Tyrannosauridae",
          diet: "Carnívoro",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Dromaeosauridae",
          diet: "Carnívoro",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Spinosauridae",
          diet: "Carnívoro",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Allosauridae",
          diet: "Carnívoro",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Diplodocidae",
          diet: "Herbívoro",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Brachiosauridae",
          diet: "Herbívoro",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Classifications", null, {});
  },
};
