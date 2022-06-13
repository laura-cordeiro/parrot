const db = require("../index"),
  { DataTypes } = require("sequelize");

const Posts = db.define(
  "Posts",
  {
    idPosts: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idUser: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: "idUsers",
      references: {
        model: "Users",
        key: "idUsers"
      }
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    deletedAt: {
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "posts",
    paranoid: true
  }
);

module.exports = Posts;
