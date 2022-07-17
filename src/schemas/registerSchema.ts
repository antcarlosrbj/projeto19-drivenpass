import Joi from "joi";
import { CredentialCreate } from "../services/registerService";

export const credentialCreate = Joi.object<CredentialCreate>({
  url: Joi.string().uri().required(),
  user: Joi.string().required(),
  password: Joi.string().required(),
  title: Joi.string().required()
});