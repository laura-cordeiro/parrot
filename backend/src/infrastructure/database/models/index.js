const Users = require("./users"),
  Posts = require("./posts");

Users.hasMany(Posts, {
  foreignKey: "idUsers"
});

Posts.belongsTo(Users, {
  foreignKey: "idUsers"
});

module.exports = {
  Users,
  Posts
};
