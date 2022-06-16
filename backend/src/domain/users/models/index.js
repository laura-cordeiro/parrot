const Users = require("./Users"),
  Posts = require("../../posts/models/Posts");

Users.hasMany(Posts, {
  foreignKey: "idUser"
});

module.exports = {
  Users
};
