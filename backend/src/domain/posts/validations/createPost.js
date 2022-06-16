const { validate, Joi } = require("express-validation");

export const create = validate({
  body: Joi.object({
    post_id: Joi.number().required().integer(),
    user_id: Joi.number().required().integer(),
    content: Joi.string().required().max(200),
  }),
});