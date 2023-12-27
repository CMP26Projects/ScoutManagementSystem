import { Router } from 'express'
import captainController from '../controllers/captain.controller.js'

const captainRouter = Router()

captainRouter.get('/', captainController.getAllCaptains)
captainRouter.get('/unit/:unitCaptainId', captainController.getCaptainsInUnit)
captainRouter.get(
    '/sector/:baseName/:suffixName',
    captainController.getCaptainsInSector
)
captainRouter.get('/:captainId', captainController.getCaptain)
captainRouter.patch('/:captainId', captainController.setCaptainType)

export default captainRouter
