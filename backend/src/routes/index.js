const express = require("express"),
  routes = express.Router(),
  UsersController = require("../domain/users/controllers/usersController"),
  PostsController = require("../domain/posts/controllers/postsController"),
  validatorGetPost = require("../domain/posts/validations/getPost"),
  validatorCreatePost = require("../domain/posts/validations/createPost"),
  validatorCreatUser = require("../domain/users/validations/createUsers"),
  validatorReadUser = require("../domain/users/validations/getUsers"),
  validatorUptadeUser = require("../domain/users/validations/updateUsers"),
  validatorDeleteUser = require("../domain/users/validations/deleteUsers");

routes.post("/users", validatorCreatUser, UsersController.createUser);
routes.get("/users", UsersController.readUsers);
routes.get("/users/:id", validatorReadUser, UsersController.readUsersId);
routes.put("/users/:id", validatorUptadeUser, UsersController.updateUsers);
routes.delete("/users/:id", validatorDeleteUser, UsersController.deleteUsers);

routes.get("/posts/:id", validatorGetPost, PostsController.getUserPosts);
routes.get("/posts", PostsController.getAllPosts);
routes.post("/post", validatorCreatePost, PostsController.createPost);
routes.put("/post/:id", PostsController.updatePost);
routes.delete("/post/:id", PostsController.deletePost);

module.exports = routes;
