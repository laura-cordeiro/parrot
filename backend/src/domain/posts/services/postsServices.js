const { Users } = require("../../users/models/");
const { Posts } = require("../models/");

const PostsServices = {

  async checkAuthorization(req,id){
    return await req.auth.idUser == id || req.auth.admin==true;
   },

  async findUser(idUser) {
    const checkUser = await Users.findOne({ where: { idUser } });
    return checkUser;
  },

  async findPost(id) {
    const checkPost = await Posts.findOne({ where: { idPosts:id } });
    return checkPost;
  },

  async findPostsByUser(req){
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

    return posts;
  },

  async findAllPosts(req) {
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

      return posts;
  },

  async createPost(data) {
    const newPost = await Posts.create({
      ...data.body,
    });
    return newPost;
  },

  async updatePost(id,data) {
    
    const updatedPost = await Posts.update(
      {
        ...data,
      },
      {
        where: {
          idPosts: id,
        },
      }
    );    
    return updatedPost;
  },

  async deletePost(id) {
    const deletedPost = await Posts.destroy(
      {
        where: {
          idPosts: id,
        },
      }
    );    
    return deletedPost;
  },
  

};

module.exports = PostsServices;
