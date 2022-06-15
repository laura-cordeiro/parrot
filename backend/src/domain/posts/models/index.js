const Users = require("../../users/models/Users"),
  Posts = require("./Posts");

Posts.belongsTo(Users, {
  foreignKey: "idUsers"
});

module.exports = {
  Posts
};
