import { Router } from "express";
import {credentialCreatePOST, credentialListAllGET} from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.post("/credential/create", credentialCreatePOST);
registerRouter.get("/credential/list-all", credentialListAllGET);


export default registerRouter;