const { Users } = require("../models");
const bcrypt = require("bcryptjs");

const UsersController = {
  async createUser(req, res) {
    try {
      const { email, password } = req.body;
      const existingUser = await Users.count({ where: { email } });
      console.log(existingUser);
      if (existingUser) {
        return res.status(400).json("Email já está cadastrado");
      }
      const newPassword = bcrypt.hashSync(password, 10);
      const newUser = await Users.create({
        ...req.body,
        password: newPassword
      });
      res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json("Erro ao tentar cadastrar usuário");
    }
  },
  async readUsers(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 10;
      const offset = limit * (parseInt(page) - 1);
      let filter = {
        limit,
        offset
      };
      const listUsers = await Users.findAll(filter);
      return res.status(200).json(listUsers);
    } catch (error) {
      return res.status(500).json("Erro ao listar os usuários");
    }
  },
  async readUsersId(req, res) {
    try {
      const { id } = req.params;
      const listUsers = await Users.findOne({
        where: { idUser: id }
      });
      if (!listUsers) return res.status(404).json("Usuário não encontrado");
      return res.status(200).json(listUsers);
    } catch (error) {
      return res.status(500).json("Erro ao listar o usuário");
    }
  },
  async updateUsers(req, res) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const updatePassword = bcrypt.hashSync(password, 10);
      const updateUser = await Users.update(
        {
          ...req.body,
          password: updatePassword
        },
        {
          where: {
            idUser: id
          }
        }
      );
      if (updateUser == 0) return res.status(400).json("Usuário inválido");
      console.log(updateUser);
      return res.status(200).json("Usuário atualizado");
    } catch (error) {
      return res.status(500).json("Erro ao tentar atualizar usuário");
    }
  },
  async deleteUsers(req, res) {
    try {
      const { id } = req.params;
      const userValidation = await Users.count({
        where: {
          idUser: id
        }
      });
      if (!userValidation)
        return res.status(404).json("Usuário não encontrado");
      await Users.destroy({
        where: {
          idUser: id
        }
      });
      return res.status(204).json("Usuário apagado");
    } catch (error) {
      return res.status(500).json("Erro ao tentar excluir usuário");
    }
  }
};

module.exports = UsersController;
