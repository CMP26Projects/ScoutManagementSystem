import { Router } from 'express'
import sectorController from '../controllers/sector.controller.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'

const sectorRouter = Router()

sectorRouter.post('/', sectorController.insertSector)
sectorRouter.get('/all', sectorController.getAllSectors)
sectorRouter.get('/', sectorController.getSector)
sectorRouter.patch(
    '/unit',
    sectorController.setUnitCaptain
)
sectorRouter.patch('/assign', sectorController.assignCaptain)

export default sectorRouter
