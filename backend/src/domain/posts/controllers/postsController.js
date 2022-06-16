const { Posts } = require("../models");
const { Users } = require("../../users/models");

const PostsController = {
  async getAllPosts(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 10;
      const offset = limit * (parseInt(page) - 1);

      let filter = {
        limit,
        offset,
      };
      const posts = await Posts.findAll(filter);

      if (!posts.length) {
        return res.status(404).json("Eita! Não foi feito nenhum post ainda");
      }

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json("Erro não catalogado!");
    } 
  },
  async getUserPosts(req, res) {
    try {
      const { id } = req.params;
      const { page = 1 } = req.query;
      const limit = 10;
      const offset = limit * (parseInt(page) - 1);

      let filter = {};

      if (id) {
        Object.assign(filter, {
          where: {
            idUser: id,
          },
          limit,
          offset,
        });
      }

      const posts = await Posts.findAll(filter);

      if (!posts.length) {
        return res.status(404).json("Id não encontrado!");
      }
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json("Erro não catalogado! ");
    }
  },

  async createPost(req, res) {
    try {
      const {idUser} = req.body
      const checkUser = await Users.count({ where: { idUser } });
      if (!checkUser) {
        return res.status(400).send("Id não encontrado!");
      }
      console.log(req.body)
      const newPost = await Posts.create({
        ...req.body,
      });
      return res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json("Erro não catalogado!");
    }
  },
};

module.exports = PostsController;
