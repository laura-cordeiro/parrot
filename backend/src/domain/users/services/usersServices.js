const { Users } = require("../models");
const bcrypt = require("bcryptjs");

const usersServices = {
  async checkAuthorization(req,id){
    return await req.auth.idUser == id || req.auth.admin == true;
   },
  async register(data) {
    const { password } = data;
    const newUser = await Users.create({
      ...data,
      password: this.getNewPassword(password),
    });
    return newUser;
  },
  getNewPassword(password) {
    const newPassword = bcrypt.hashSync(password, 10);
    return newPassword;
  },
  async hasEmail(email) {
    const existingUser = await Users.count({ where: { email } });
    return existingUser;
  },
  async readAll(data) {
    const { page = 1 } = data;
    const limit = 10;
    const offset = limit * (parseInt(page) - 1);
    let filter = {
      limit,
      offset,
    };
    const listUsers = await Users.findAll(filter);
    return listUsers;
  },
  async readId(data) {
    const { id } = data;
    const listUsers = await Users.findOne({
      where: { idUser: id },
    });
    return listUsers;
  },
  async updateId(id, data) {
    const { password } = data;
    const updateUser = await Users.update(
      {
        ...data,
        password: this.getNewPassword(password),
      },
      {
        where: {
          idUser: id,
        },
      }
    );
    return updateUser;
  },
  async delete(data) {
    const { id } = data;
    const userValidation = await Users.count({
      where: {
        idUser: id,
      },
    });
    await Users.destroy({
      where: {
        idUser: id,
      },
    });
    return userValidation;
  },
};

module.exports = usersServices;
