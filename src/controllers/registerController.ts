import { Request, Response } from "express";
import * as registerService from "../services/registerService.js";


export async function createPOST(req: Request, res: Response) {

  const category = req.url.split("/")[1];
  const data = req.body;
  
  const {authorization} = req.headers;

  

  const validate = await registerService.validate(category, data);
  if (!validate.res) {
    res.status(401).send(validate.text);
    return;
  }

  const title = data.title;
  delete data.title;

  
  
  const verifyTokenResult = await registerService.verifyToken(authorization);
  if (!verifyTokenResult.res) {
    res.status(401).send(verifyTokenResult.text);
    return;
  }

  const {userId} = verifyTokenResult;



  const insertRegister = await registerService.insertRegister(category, data, title, userId);
  if (!insertRegister.res) {
    res.status(401).send(insertRegister.text);
    return;
  }

  res.sendStatus(201);
}



export async function listAllGET(req: Request, res: Response) {
  
  
  const category = req.url.split("/")[1];
  const {authorization} = req.headers;

  

  const verifyTokenResult = await registerService.verifyToken(authorization);
  if (!verifyTokenResult.res) {
    res.status(401).send(verifyTokenResult.text);
    return;
  }

  const {userId} = verifyTokenResult;

  

  const listCredential = await registerService.listAll(category, userId);

  

  res.send(listCredential);
}



export async function listIdGET(req: Request, res: Response) {
  
  
  const category = req.url.split("/")[1];
  const registerId = parseInt(req.params.id);
  const {authorization} = req.headers;

  

  const verifyTokenResult = await registerService.verifyToken(authorization);
  if (!verifyTokenResult.res) {
    res.status(401).send(verifyTokenResult.text);
    return;
  }

  const {userId} = verifyTokenResult;

  

  const getRegister = await registerService.getRegister(category, userId, registerId);
  if(!getRegister.res) {
    res.sendStatus(404);
  }

  

  res.send(getRegister.data);
}



export async function registerIdDELETE(req: Request, res: Response) {

  
  const category = req.url.split("/")[1];
  const registerId = parseInt(req.params.id);
  const {authorization} = req.headers;

  

  const verifyTokenResult = await registerService.verifyToken(authorization);
  if (!verifyTokenResult.res) {
    res.status(401).send(verifyTokenResult.text);
    return;
  }

  const {userId} = verifyTokenResult;

  

  const deleteRegister = await registerService.deleteRegister(category, userId, registerId);
  if(!deleteRegister) {
    res.sendStatus(404);
    return;
  }

  
  
  res.sendStatus(200);
}