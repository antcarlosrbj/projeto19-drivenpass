import Joi from "joi";
//import { CredentialCreate } from "../services/registerService";

export type CredentialCreate = {
  url: string;
  user: string;
  password: string;
  title: string;
};

export type SecureNoteCreate = {
  note: string;
  title: string;
};

export type WifiCreate = {
  name: string;
  password: string;
  title: string;
};

export type CardsCreate = {
  number: string;
  name: string;
  securityCode: string;
  expirationDate: string;
  password: string;
  type: string;
  title: string;
};



export const credentialCreate = Joi.object<CredentialCreate>({
  url: Joi.string().uri().required(),
  user: Joi.string().required(),
  password: Joi.string().required(),
  title: Joi.string().required()
});

export const secureNoteCreate = Joi.object<SecureNoteCreate>({
  note: Joi.string().required(),
  title: Joi.string().required()
});

export const wifiCreate = Joi.object<WifiCreate>({
  name: Joi.string().required(),
  password: Joi.string().required(),
  title: Joi.string().required()
});

export const cardsCreate = Joi.object<CardsCreate>({
  number: Joi.string().required(),
  name: Joi.string().required(),
  securityCode: Joi.string().required(),
  expirationDate: Joi.string().required(),
  password: Joi.string().required(),
  type: Joi.string().required(),
  title: Joi.string().required()
});