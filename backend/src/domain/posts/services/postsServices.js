const { Users } = require("../../users/models/");
const { Posts } = require("../models/");

const PostsServices = {
  async findUser(idUser) {
    const checkUser = await Users.count({ where: { idUser } });
    return checkUser;
  },

  async findPost(id) {
    const checkPost = await Posts.count({ where: { idPosts:id } });
    return checkPost;
  },

  async createPost(data) {
    const newPost = await Posts.create({
      ...data,
    });
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
  },

  async deletePost(id) {
    const updatedPost = await Posts.destroy(
      {
        where: {
          idPosts: id,
        },
      }
    );    
  },

};

module.exports = PostsServices;
