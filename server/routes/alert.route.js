import {Router} from "express"
import alertController from "../controllers/alert.controller.js"

const alertRouter = Router();

alertRouter.get("/", alertController.getAllAlerts);
alertRouter.get("/:id", alertController.getAlert);
alertRouter.post("/post", alertController.CreateAlert);
alertRouter.delete("/:id", alertController.DeleteAlert);

export default alertRouter;
