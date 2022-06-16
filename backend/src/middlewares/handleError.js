const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    console.log("Erro encontrado");
    return res.status(error.statusCode).json(error);
  }
  if (error.name === "UnauthorizedError") {
    return res
      .status(error.status)
      .json("Usuário não autorizado para realizar esta operação.");
  }
  console.log("Erro 500");
  return res.status(500).json(error);
};
