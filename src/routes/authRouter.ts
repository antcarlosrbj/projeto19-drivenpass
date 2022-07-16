import { Router } from "express";
import {auth} from "../controllers/authController.js";
// import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
//import { questionSchema } from "../schemas/questionSchema.js";

const authRouter = Router();

// authRouter.post("/questions", validateSchemaMiddleware(questionSchema), create);
authRouter.post("/auth", auth);

export default authRouter;