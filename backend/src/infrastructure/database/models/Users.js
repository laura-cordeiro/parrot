const db = require("../index"),
  { DataTypes } = require("sequelize");

const Users = db.define(
  "Users",
  {
    idUser: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apartment: {
      type: DataTypes.INTEGER
    },
    password: {
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
    tableName: "users",
    paranoid: true
  }
);

module.exports = Users;
