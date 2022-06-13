"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
  seed.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    apartment: faker.random.numeric(2),
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", seed);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
