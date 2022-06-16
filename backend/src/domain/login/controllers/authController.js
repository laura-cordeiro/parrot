const { Users } = require("../../users/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../../infrastructure/database/config/secret");

const authController = {
  async login(req, res) {
    try {
      // const { email, password } = req.body;
      // const user = await Users.findOne({
      //   where: {
      //     email
      //   }
      // });
      // if (!user) {
      //   return res
      //     .status(401)
      //     .json("Usuário ou senha inválido, verique e tente novamente");
      // }
      // if (!bcryptjs.compareSync(password, user.password)) {
      //   return res
      //     .status(401)
      //     .json("Usuário ou senha inválido, verique e tente novamente");
      // }
      // const token = jwt.sign(
      //   {
      //     idUser: user.idUser,
      //     name: user.name,
      //     email: user.email
      //   },
      //   secret.chave
      // );
      return res.json(token);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Erro ao logar");
    }
  }
};

module.exports = authController;
