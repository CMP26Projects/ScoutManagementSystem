import { Router } from 'express'
import sectorController from '../controllers/sector.controller.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'

const sectorRouter = Router()

sectorRouter.post('/', sectorController.insertSector)
sectorRouter.get('/all', sectorController.getAllSectors)
sectorRouter.get('/', sectorController.getSector)
sectorRouter.patch(
    '/unit',
    //TODO: Check if the captain id is for a unit captain
    sectorController.setUnitCaptain
)
sectorRouter.patch('/captain/assign', sectorController.assignCaptain)

export default sectorRouter
