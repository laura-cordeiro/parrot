const { Users } = require("../../users/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../../infrastructure/database/config/secret");

const loginServices = {

  async hasEmail(email) {
    const checkUser = await Users.findOne({ where: { email } });
    return checkUser;
  },

  checkPassword(password,passwordDB) {
    return bcrypt.compareSync(password, passwordDB);
  },
  
  getToken(data) {
    const token = jwt.sign(
      {
        idUser: data.idUser,
        name: data.name,
        email: data.email,
      },
      secret.chave
    );
    return token;
  },
};

module.exports = loginServices;
