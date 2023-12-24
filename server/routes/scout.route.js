import { Router } from "express"
import scoutController from "../controllers/scout.controller.js";


const scoutRouter = Router();

scoutRouter.get('/allScouts/count', scoutController.allScoutsCount)
scoutRouter.get('/allScouts/info', scoutController.allScoutsInfo)
scoutRouter.get('/scoutsInSector/count', scoutController.scoutsInSectorCount)
scoutRouter.get('/scoutsInSector/info', scoutController.scoutsInSectorInfo)
scoutRouter.get('/allScoutsInUnit/count', scoutController.allScoutsInUnitCount)
scoutRouter.get('/allScoutsInUnit/info', scoutController.allScoutsInUnitInfo)

export default scoutRouter