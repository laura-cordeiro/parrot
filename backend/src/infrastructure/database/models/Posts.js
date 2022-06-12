const db = require("../index");
const { DataTypes } = require("sequelize");

const Posts = db.define(
  "Posts",
  {
    idPosts: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idUsers: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: "idUsers",
      references: {
        model: "Users",
        key: "idUsers"
      }
    },
    content: {
      type: DataTypes.STRING
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
