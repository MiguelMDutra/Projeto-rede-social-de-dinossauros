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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Dromaeosauridae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Spinosauridae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Allosauridae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Diplodocidae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Saurischia",
          family: "Brachiosauridae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Ornithischia",
          family: "Ceratopsidae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Ornithischia",
          family: "Hadrosauridae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Ornithischia",
          family: "Stegosauridae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kingdom: "Animalia",
          phylum: "Chordata",
          class: "Reptilia",
          order: "Ornithischia",
          family: "Ankylosauridae",
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
