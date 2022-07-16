import Joi from "joi";
import { UserWithoutId } from "../services/authService";

export const userWithoutId = Joi.object<UserWithoutId>({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(10)
});
