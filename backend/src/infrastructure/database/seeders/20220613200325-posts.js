"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 1; i <= 15; i++) {
  seed.push({
    idUser: i,
    content: faker.lorem.lines(2),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("posts", seed);
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
