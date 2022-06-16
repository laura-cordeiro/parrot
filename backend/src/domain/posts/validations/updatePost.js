const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    id: Joi.number().required().integer,
  }),
  body: Joi.object({
    content: Joi.string().max(200).required(),
  }),
});
