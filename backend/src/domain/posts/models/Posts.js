const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Posts = db.define(
  "posts",
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
      field: "idUser",
      references: {
        model: "users",
        key: "idUser"
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
