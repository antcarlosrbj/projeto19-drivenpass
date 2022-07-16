import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function signUpPOST(req: Request, res: Response) {
  const user: authService.UserWithoutId = req.body;

  const validateUser = await authService.validateUser(user);
  if (!validateUser.res) {
    res.status(401).send(validateUser.text);
    return;
  }

  const duplicateUser = await authService.duplicateUser(user);
  if (!duplicateUser.res) {
    res.status(401).send(duplicateUser.text);
    return;
  }

  await authService.insertIntoDatabase(user)

  res.sendStatus(201);
}

export async function signInPOST(req: Request, res: Response) {
  const user: authService.UserWithoutId = req.body;

  const validateUser = await authService.validateUser(user);
  if (!validateUser.res) {
    res.status(401).send(validateUser.text);
    return;
  }

  const authenticateLogin = await authService.authenticateLogin(user);
  if (!authenticateLogin.res) {
    res.status(401).send(authenticateLogin.text);
    return;
  }

  const token = await authService.sendToken(user);

  res.status(200).send(token);
}