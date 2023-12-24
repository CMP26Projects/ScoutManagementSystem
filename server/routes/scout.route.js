import { Router } from "express"
import scoutController from "../controllers/scout.controller.js";


const scoutRouter = Router();

scoutRouter.get('/allScouts/count', scoutController.allScoutsCount)
scoutRouter.get('/allScouts/info', scoutController.allScoutsInfo)

export default scoutRouter