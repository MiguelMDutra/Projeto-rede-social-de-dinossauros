"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Dinosaurs", [
      {
        name: "Tyrannosaurus rex",
        genus: "Tyrannosaurus",
        description:
          "Um dos maiores predadores terrestres já conhecidos, viveu no final do período Cretáceo.",
        weightKg: 8400,
        heightM: 4,
        lengthM: 12.3,
        mainImage: "tyrannosaurus-rex.jpg",
        status: "aprovado",

        creatorUserId: 1,
        habitatId: 1,
        classificationId: 1,
        siteId: 1,
        geologicalPeriodId: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Triceratops horridus",
        genus: "Triceratops",
        description:
          "Grande dinossauro herbívoro conhecido pelos três chifres e pela ampla gola óssea.",
        weightKg: 8000,
        heightM: 3,
        lengthM: 9,
        mainImage: "triceratops.jpg",
        status: "aprovado",

        creatorUserId: 1,
        habitatId: 2,
        classificationId: 2,
        siteId: 2,
        geologicalPeriodId: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Velociraptor mongoliensis",
        genus: "Velociraptor",
        description:
          "Pequeno dinossauro carnívoro ágil, famoso por sua inteligência e pela garra em forma de foice.",
        weightKg: 15,
        heightM: 0.5,
        lengthM: 2,
        mainImage: "velociraptor.jpg",
        status: "aprovado",

        creatorUserId: 1,
        habitatId: 3,
        classificationId: 1,
        siteId: 3,
        geologicalPeriodId: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Dinosaurs", {
      name: [
        "Tyrannosaurus rex",
        "Triceratops horridus",
        "Velociraptor mongoliensis",
      ],
    });
  },
};
