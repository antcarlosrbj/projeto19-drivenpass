import { Router } from "express";
import {credentialCreatePOST, credentialListAllGET, credentialIdGET} from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.post("/credential/create", credentialCreatePOST);
registerRouter.get("/credential/list-all", credentialListAllGET);
registerRouter.get("/credential/id/:id", credentialIdGET);

export default registerRouter;