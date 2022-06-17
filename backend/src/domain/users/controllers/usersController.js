const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const usersServices = require("../services/usersServices");

const UsersController = {
  async createUser(req, res) {
    try {
      const { email } = req.body;
      const existingUser = await usersServices.hasEmail(email);
      if (existingUser) {
        return res.status(400).json("Email já está cadastrado");
      }
      const newUser = await usersServices.register(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json("Erro ao tentar cadastrar usuário");
    }
  },
  async readUsers(req, res) {
    try {
      const listUsers = await usersServices.readAll(req.params);
      return res.status(200).json(listUsers);
    } catch (error) {
      return res.status(500).json("Erro ao listar os usuários");
    }
  },
  async readUsersId(req, res) {
    try {
      const { id } = req.params;

      const checkAuth = await usersServices.checkAuthorization(req, id);
      if (!checkAuth) {
        return res.status(401).json("Usuário não autorizado!");
      }

      const listUsers = await usersServices.readId(req.params);
      if (!listUsers) return res.status(404).json("Usuário não encontrado");
      return res.status(200).json(listUsers);
    } catch (error) {
      return res.status(500).json("Erro ao listar o usuário");
    }
  },
  async updateUsers(req, res) {
    try {
      const { id } = req.params;

      const checkAuth = await usersServices.checkAuthorization(req, id);
      if (!checkAuth) {
        return res.status(401).json("Usuário não autorizado!");
      }

      const updateUser = await usersServices.updateId(id, req.body);
      if (updateUser == 0)
        return res.status(400).json("Usuário não cadastrado");
      return res.status(200).json("Usuário atualizado");
    } catch (error) {
      return res.status(500).json("Erro ao tentar atualizar usuário");
    }
  },
  async deleteUsers(req, res) {
    try {
      const {id} = req.params;
      
      const checkAuth = await usersServices.checkAuthorization(req, id);
      if (!checkAuth) {
        return res.status(401).json("Usuário não autorizado!");
      }

      const userValidation = await usersServices.delete(req.params);
      if (!userValidation)
        return res.status(404).json("Usuário não encontrado");
      return res.status(204).json("Usuário apagado");
    } catch (error) {
      return res.status(500).json("Erro ao tentar excluir usuário");
    }
  },
};
module.exports = UsersController;
