const { validate, Joi } = require("express-validation");

export const getOne = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});
