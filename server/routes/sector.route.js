import {Router} from "express"
import sectorController from "../controllers/sector.controller.js"
import checkRankMiddleware from "../middlewares/checkRank.middleware.js";

const sectorRouter = Router();

sectorRouter.get('/all', sectorController.getAllSectors)
sectorRouter.get('/:baseName/:suffixName', sectorController.getSector)
sectorRouter.post('/add', sectorController.insertSector)
sectorRouter.patch(
    '/unit/set/:id/:baseName/:suffixName',
    //TODO: Check if the captain id is for a unit captain
    sectorController.setUnitCaptain
)


export default sectorRouter;