const express = require("express"),
  routes = express.Router(),
  UsersController = require("../domain/users/controllers/usersController");

routes.post("/users", UsersController.createUser);
routes.get("/users", UsersController.readUsers);
routes.put("/users/:id", UsersController.updateUsers);
routes.delete("/users/:id", UsersController.deleteUsers);

module.exports = routes;
