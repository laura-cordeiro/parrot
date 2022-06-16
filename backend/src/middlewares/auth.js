const { expressjwt: expressJWT } = require("express-jwt");
const secret = require("../infrastructure/database/config/secret");

module.exports = expressJWT({
  secret: secret.chave,
  algorithms: ["HS256"]
});
