import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function signUpPOST(req: Request, res: Response) {
  const user: authService.UserWithoutId = req.body;

  const result = await authService.validateUser(user);
  if (!result.res) {
    res.status(404).send(result.text);
    return;
  }

  await authService.insertIntoDatabase(user)

  res.sendStatus(201);
}