const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    id: Joi.number().required().integer()
  }),
  body: Joi.object({
    name: Joi.string().required(),
    apartment: Joi.number().integer(),
    password: Joi.string().min(6).required()
  })
});
