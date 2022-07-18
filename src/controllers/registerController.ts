import { Request, Response } from "express";
import * as registerService from "../services/registerService.js";
import * as authService from "../services/authService.js";
import { toNamespacedPath } from "path/posix";

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


export async function credentialIdGET(req: Request, res: Response) {
    
  const registerId = parseInt(req.params.id);
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

  const getCredential = await registerService.getCredential(userId, registerId);
  if(!getCredential.res) {
    res.sendStatus(404);
  }

  res.send(getCredential.data);
}

export async function credentialIdDELETE(req: Request, res: Response) {

  const registerId = parseInt(req.params.id);
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

  const {userId} = result; // PEGAR ID


  const deleteCredential = await registerService.deleteCredential(userId, registerId);
  if(!deleteCredential) {
    res.sendStatus(404);
  }

  res.sendStatus(200);
}