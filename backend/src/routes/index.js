const express = require("express"),
  routes = express.Router(),
  UsersController = require("../domain/users/controllers/usersController"),
  PostsController = require("../domain/posts/controllers/postsController"),
  validatorGetPost = require("../domain/posts/validations/getPost"),
  validatorCreatePost = require("../domain/posts/validations/createPost"),
  validatorCreatUser = require("../domain/users/validations/createUsers"),
  validatorReadUser = require("../domain/users/validations/getUsers"),
  validatorUptadeUser = require("../domain/users/validations/updateUsers"),
  validatorDeleteUser = require("../domain/users/validations/deleteUsers"),
  authController = require("../domain/login/controllers/authController"),
  loginValidator = require("../domain/login/validations/loginValidator"),
  authenticator = require("../middlewares/auth")

routes.post("/login", loginValidator, authController.login);

routes.post("/users",validatorCreatUser, UsersController.createUser);
routes.get("/users",authenticator,UsersController.readUsers);
routes.get("/users/:id",authenticator, validatorReadUser, UsersController.readUsersId);
routes.put("/users/:id",authenticator, validatorUptadeUser, UsersController.updateUsers);
routes.delete("/users/:id",authenticator, validatorDeleteUser, UsersController.deleteUsers);

routes.get("/posts/:id",authenticator, validatorGetPost, PostsController.getUserPosts);
routes.get("/posts", authenticator,PostsController.getAllPosts);
routes.post("/post",authenticator,validatorCreatePost, PostsController.createPost);
routes.put("/post/:id",authenticator, PostsController.updatePost);
routes.delete("/post/:id",authenticator, PostsController.deletePost);

module.exports = routes;
