import { Router } from "express";
import {credentialCreatePOST, credentialListAllGET, credentialIdGET, credentialIdDELETE} from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.post("/credential/create", credentialCreatePOST);
registerRouter.get("/credential/list-all", credentialListAllGET);
registerRouter.get("/credential/id/:id", credentialIdGET);
registerRouter.delete("/credential/id/:id", credentialIdDELETE);

export default registerRouter;