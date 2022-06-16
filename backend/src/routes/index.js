const express = require("express"),
  routes = express.Router(),
  UsersController = require("../domain/users/controllers/usersController"),
  PostsController = require("../domain/posts/controllers/postsController"),
  validatorGetPost = require("../domain/posts/validations/getPost")
  validatorCreatePost = require("../domain/posts/validations/createPost")
  
  



routes.post("/users", UsersController.createUser);
routes.get("/users", UsersController.readUsers);
routes.get("/users/:id", UsersController.readUsersId);
routes.put("/users/:id", UsersController.updateUsers);
routes.delete("/users/:id", UsersController.deleteUsers);

routes.get("/posts/:id",validatorGetPost, PostsController.getUserPosts);
routes.get("/posts", PostsController.getAllPosts);
routes.post("/post",validatorCreatePost,PostsController.createPost);
routes.put("/post/:id",PostsController.updatePost);
routes.delete("/post/:id",PostsController.deletePost);

module.exports = routes;
