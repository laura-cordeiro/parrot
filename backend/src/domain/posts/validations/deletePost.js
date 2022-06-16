const { validate, Joi } = require("express-validation");

export const destroy = validate({
  params: Joi.object({
    id: Joi.number().required().integer(),
  }),
});
