const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    apartment: Joi.number().integer(),
    password: Joi.string().min(6).required()
  })
});
