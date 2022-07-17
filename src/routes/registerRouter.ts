import { Router } from "express";
import {credentialCreatePOST} from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.post("/credential/create", credentialCreatePOST);

export default registerRouter;