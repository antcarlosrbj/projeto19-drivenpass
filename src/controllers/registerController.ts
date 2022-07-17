import { Request, Response } from "express";
import * as registerService from "../services/registerService.js";
import * as authService from "../services/authService.js";

export async function credentialCreatePOST(req: Request, res: Response) {
  const credential: registerService.CredentialCreate = req.body;
  
  const {authorization} = req.headers;

  if (!authorization) {
    res.status(401).send("Token is not allowed to be empty");
    return;
  }

  const [, token] = authorization.split(" ");
  if (!token) {
    res.status(401).send("Token is not allowed to be empty");
    return;
  }

  const validateCredential = await registerService.validateCredential(credential);
  if (!validateCredential.res) {
    res.status(401).send(validateCredential.text);
    return;
  }

  const result = await authService.validateToken(token);
  if (!result.res) {
    res.status(401).send(result.text);
    return;
  }

  const {userId} = result;
  const credentialWithUserId = {...credential, userId: userId}
  

  const insertCredential = await registerService.insertCredential(credentialWithUserId);
  if (!insertCredential.res) {
    res.status(401).send(insertCredential.text);
    return;
  }

  res.sendStatus(201);
}


export async function credentialListAllGET(req: Request, res: Response) {
    
  const {authorization} = req.headers;

  if (!authorization) {
    res.status(401).send("Token is not allowed to be empty");
    return;
  }

  const [, token] = authorization.split(" ");
  if (!token) {
    res.status(401).send("Token is not allowed to be empty");
    return;
  }

  const result = await authService.validateToken(token);
  if (!result.res) {
    res.status(401).send(result.text);
    return;
  }

  const {userId} = result;

  const listCredential = await registerService.listCredential(userId);

  res.send(listCredential);
}