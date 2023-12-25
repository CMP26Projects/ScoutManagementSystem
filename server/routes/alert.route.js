import {Router} from "express"
import alertController from "../controllers/alert.controller.js"

const alertRouter = Router();

alertRouter.get("/", alertController.getAllAlerts);
alertRouter.post("/", alertController.CreateAlert);
alertRouter.get("/:id", alertController.getAlert);
alertRouter.delete("/:id", alertController.DeleteAlert);

export default alertRouter;
