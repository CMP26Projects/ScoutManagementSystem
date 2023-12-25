import {Router} from "express"
import sectorController from "../controllers/sector.controller.js"

const sectorRouter = Router();

sectorRouter.get('/all', sectorController.getAllSectors)
sectorRouter.get('/:baseName/:suffixName', sectorController.getSector)
sectorRouter.post('/add', sectorController.insertSector)
sectorRouter.patch('/unit/set/:id/:baseName/:suffixName', sectorController.setUnitCaptain)


export default sectorRouter;