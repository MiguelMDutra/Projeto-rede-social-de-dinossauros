class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const all = await this.model.findAll();
    return all;
  }
}

module.exports = Services;
