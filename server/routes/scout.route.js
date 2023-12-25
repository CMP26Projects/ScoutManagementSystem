import { Router } from "express"
import scoutController from "../controllers/scout.controller.js";


const scoutRouter = Router();

scoutRouter.post('/', scoutController.insertScout)
scoutRouter.get('/:id', scoutController.certainScoutInfo)
scoutRouter.put('/:id', scoutController.updateScout)
scoutRouter.get('/allScouts/count', scoutController.allScoutsCount)
scoutRouter.get('/allScouts/info', scoutController.allScoutsInfo)
scoutRouter.get('/allScoutsInSector/count', scoutController.scoutsInSectorCount)
scoutRouter.get('/allScoutsInSector/info', scoutController.scoutsInSectorInfo)
scoutRouter.get('/allScoutsInUnit/count/:id', scoutController.allScoutsInUnitCount)
scoutRouter.get('/allScoutsInUnit/info/:id', scoutController.allScoutsInUnitInfo)

export default scoutRouter