"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      idPosts: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsers: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        field: "idUsers",
        references: {
          model: "Users",
          key: "idUsers"
        }
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  }
};
