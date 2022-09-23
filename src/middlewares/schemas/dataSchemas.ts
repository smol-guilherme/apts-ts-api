import Joi from "joi";

export const idSchema = Joi.object({
  id: Joi.number().required(),
});

export const signupSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  profilePicture: Joi.string().trim().uri().required(),
  userName: Joi.string().trim().required(),
  password: Joi.string().trim().min(10).required(),
  repeatPassword: Joi.string().trim().valid(Joi.ref("password")).required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().min(10).required(),
});

export const productSchema = Joi.object({
  productName: Joi.string().trim().required(),
  pictureUrl: Joi.string().trim().uri().required(),
  userId: Joi.number().min(1).required(),
  price: Joi.number().min(1).required(),
});
