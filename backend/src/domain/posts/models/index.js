const Users = require("../../users/models/Users"),
  Posts = require("./Posts");

Posts.belongsTo(Users, {
  foreignKey: "idUser"
});

module.exports = {
  Posts
};
