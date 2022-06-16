const { Users } = require("../../users/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../../infrastructure/database/config/secret");
const loginServices = require("../services/loginServices");
const { checkPassword } = require("../services/loginServices");


const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await loginServices.hasEmail(email);

      if (!user) {
        return res
          .status(401)
          .json({
            message: "E-mail ou senha inválido",
          })
      
      };

      if (!checkPassword(password,user.password)){
        return res
        .status(401)
        .json({
          message: "E-mail ou senha inválido"
        });
      }    

      const token = loginServices.getToken(user.idUser,user.name,user.email)

      return res.json(token);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Erro ao efetuar login");
    }
  }
};

module.exports = authController;
