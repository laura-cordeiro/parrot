const { Posts } = require("../models");
const { Users } = require("../../users/models");
const PostsServices = require("../services/postsServices");

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
      const posts = await Posts.findAll({
        include: [{
					model:Users					
				}],
        filter});

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
      const { idUser } = req.body;
      const checkUser = await PostsServices.findUser(idUser);
      if (!checkUser) {
        return res.status(400).send("Id não encontrado!");
      }
      const newPost = await PostsServices.createPost(req.body);
      if (!newPost) {
        return res.status(500).json("Falha na criação do post!");
      }
      return res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json("Erro não catalogado!");
    }
  },

  async updatePost(req, res) {
    try {
      const { id } = req.params;

      const checkPost = await PostsServices.findPost(id);
      if (!checkPost) {
        return res.status(400).json("Post não encontrado!");
      }

      const updatePost = await PostsServices.updatePost(id, req.body);
      return res.status(200).json("Post atualizado!");
    } catch (error) {
      res
        .status(400)
        .json("Erro não catalogado!");
    }
  },
  async deletePost(req, res) {
    try {
      
      const { id } = req.params;

      const checkPost = await PostsServices.findPost(id);

      if (!checkPost) {
        return res.status(400).send("Post não encontrado!");
      }
      
      const deletedPost = await PostsServices.deletePost(id);
      return res.status(204).json("Post excluido com sucesso!")

    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json(
          "Erro não catalogado!"
        );
    }
  },
};

module.exports = PostsController;
