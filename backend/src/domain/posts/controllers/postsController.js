const { Posts } = require("../models");

const PostsController = {
  async getAllPosts(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 10;
      const offset = limit * (parseInt(page) - 1);
      let filter = {
        limit,
        offset
      };
      const posts = await Posts.findAll(filter);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json("Erro ao listar os posts");
    }
  },
  getUserPosts(req, res) {},

  createPost(req, res) {}
};

module.exports = PostsController;
