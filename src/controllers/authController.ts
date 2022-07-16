import { Request, Response } from "express";
import authService  from "../services/authService.js";

export async function auth(req: Request, res: Response) {
  res.send("Hello Word")
}