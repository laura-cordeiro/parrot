const { Users } = require("../../users/models");
const secret = require("../../../infrastructure/database/config/secret");
const authServices = require("../services/authServices");
const { checkPassword } = require("../services/authServices");


const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await authServices.hasEmail(email);

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

      const token = authServices.getToken(user.idUser,email,user.admin)

      return res.json(token);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Erro ao efetuar login");
    }
  }
  
};

module.exports = authController;
