import { Router } from 'express'
import sectorController from '../controllers/sector.controller.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'

const sectorRouter = Router()

sectorRouter.post('/', sectorController.insertSector)
sectorRouter.get('/', sectorController.getAllSectors)
sectorRouter.get('/:baseName/:suffixName', sectorController.getSector)
sectorRouter.patch(
    '/:baseName/:suffixName',
    //TODO: Check if the captain id is for a unit captain
    sectorController.setUnitCaptain
)
sectorRouter.patch('/captain/:baseName/:suffixName', sectorController.assignCaptain)

export default sectorRouter
