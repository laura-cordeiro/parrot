const { expressjwt } = require("express-jwt");
const secret = require("../infrastructure/database/config/secret");

module.exports = expressjwt({
  secret: secret.chave,
  algorithms: ["HS256"],
});
