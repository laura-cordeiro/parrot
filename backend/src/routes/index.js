const express = require("express"),
  routes = express.Router(),
  UsersController = require("../domain/users/controllers/usersController"),
  PostsController = require("../domain/posts/controllers/postsController");


routes.post("/users", UsersController.createUser);
routes.get("/users", UsersController.readUsers);
routes.put("/users/:id", UsersController.updateUsers);
routes.delete("/users/:id", UsersController.deleteUsers);


routes.get("/user-posts/:id",PostsController.getUserPosts);
routes.get("/all-posts",PostsController.getAllPosts);
routes.post("/post",PostsController.createPost);




module.exports = routes;
