const Users = require("./Users"),
  Posts = require("../../posts/models/Posts");

Users.hasMany(Posts, {
  foreignKey: "idUsers"
});

module.exports = {
  Users
};
