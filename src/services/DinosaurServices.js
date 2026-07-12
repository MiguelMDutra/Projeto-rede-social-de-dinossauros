const Services = require("./Services");
const dataSource = require("../db/models");

class DinosaurServices extends Services {
  constructor() {
    super("Dinosaur");
  }
}

module.exports = DinosaurServices;
