const Users = require("./users"),
  Posts = require("./posts");

Posts.belongsTo(Users, {
  foreignKey: "idUsers"
});

module.exports = {
  Posts
};
