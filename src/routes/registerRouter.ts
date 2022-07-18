import { Router } from "express";
import * as registerController from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.post("/credential/create", registerController.createPOST);
registerRouter.get("/credential/list-all", registerController.listAllGET);
registerRouter.get("/credential/id/:id", registerController.listIdGET);
registerRouter.delete("/credential/id/:id", registerController.registerIdDELETE);

registerRouter.post("/secure_note/create", registerController.createPOST);
registerRouter.get("/secure_note/list-all", registerController.listAllGET);
registerRouter.get("/secure_note/id/:id", registerController.listIdGET);
registerRouter.delete("/secure_note/id/:id", registerController.registerIdDELETE);

registerRouter.post("/wifi/create", registerController.createPOST);
registerRouter.get("/wifi/list-all", registerController.listAllGET);
registerRouter.get("/wifi/id/:id", registerController.listIdGET);
registerRouter.delete("/wifi/id/:id", registerController.registerIdDELETE);

registerRouter.post("/cards/create", registerController.createPOST);
registerRouter.get("/cards/list-all", registerController.listAllGET);
registerRouter.get("/cards/id/:id", registerController.listIdGET);
registerRouter.delete("/cards/id/:id", registerController.registerIdDELETE);

export default registerRouter;