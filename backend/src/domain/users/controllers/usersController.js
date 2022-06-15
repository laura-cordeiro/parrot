const { Users } = require("../../../infrastructure/database/models");

const UsersController = {
  async createUser(req, res) {
    try {
      const { password } = req.body;
      const existingUser = await Users.count({ where: { email } });
      if (existingUser) {
        return res.status(400).json("Email já está cadastrado");
      }
      const newPassword = bcryptjs.hashSync(password, 10);
      const newUser = await Users.createUser({
        ...req.body,
        password: newPassword
      });
      res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json("Erro ao tentar cadastrar");
    }
  },
  async readUsers(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 5;
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
      const { idUser } = req.params;
      const listUsers = await Users.findOne({
        where: { idUser }
      });
      if (!listUsers) return res.status(404).json(listUsers);
    } catch (error) {
      return res.status(500).json("Erro ao listar o usuário");
    }
  },
  async updateUsers(req, res) {
    try {
      const { idUser } = req.params;
      const updatePassword = bcryptjs.hashSync(password, 10);
      const updateUser = await Users.updateUsers(
        {
          ...req.body,
          password: updatePassword
        },
        {
          where: {
            idUser
          }
        }
      );
      if (atualizado == 0) return res.status(400).json("Id inválido");
      return res.status(200).json("Usuário atualizado");
    } catch (error) {
      return res.status(500).json("Erro ao tentar atualizar");
    }
  },
  async deleteUsers(req, res) {
    try {
      const { id } = req.params;
      const users = await Users.destroy({
        where: {
          idUser
        }
      });
      if (!users) return res.status(404).json("Id não encontrado");
      return res.status(204).json("Usuário apagado");
    } catch (error) {
      return res.status(500).json("Erro ao tentar excluir usuário");
    }
  }
};

module.exports = UsersController;
