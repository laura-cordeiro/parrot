const Users = require("./Users");
const Posts = require("./Posts");

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
