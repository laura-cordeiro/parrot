const Users = require("./users"),
  Posts = require("./posts");

Users.hasMany(Posts, {
  foreignKey: "idUsers"
});

module.exports = {
  Users
};
