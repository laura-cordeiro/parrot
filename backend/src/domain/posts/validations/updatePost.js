const { validate, Joi } = require("express-validation");

export const update = validate({
  params: Joi.object({
    id: Joi.number().required().integer,
  }),
  body: Joi.object({
    content: Joi.string().max(200).required(),
  }),
});
