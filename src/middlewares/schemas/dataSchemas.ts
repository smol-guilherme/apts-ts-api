import Joi from "joi";

export const idSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const coordinateSchema = Joi.object({
  coordinates: Joi.array().length(2).required(),
});

export const signupSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  profilePicture: Joi.string().trim().uri().required(),
  username: Joi.string().trim().required(),
  password: Joi.string().trim().min(10).required(),
  repeatPassword: Joi.string().trim().valid(Joi.ref("password")).required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().min(10).required(),
});

export const postSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  location: Joi.array().length(2).required(),
  locationName: Joi.string().trim().required(),
  establishmentType: Joi.string()
    .trim()
    .valid("Restaurant", "Bar", "Coffee Shop")
    .required(),
});
