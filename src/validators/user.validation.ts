import Joi from "joi";

export const userValidator = Joi.object({
  userName: Joi.string().required().min(5).max(20),
  password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]')),
});