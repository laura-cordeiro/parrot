const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    id: Joi.number().required().integer(),
    idUser: Joi.number().required().integer(),
    content: Joi.string().required().max(200)
  }),
});