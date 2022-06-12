const db = require("../index");
const { DataTypes } = require("sequelize");

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
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    apartment: {
      type: DataTypes.INTEGER
    },
    password: {
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
    tableName: "users",
    paranoid: true
  }
);

module.exports = Users;
