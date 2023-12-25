import { Router } from 'express'
import captainController from '../controllers/captain.controller.js'

const captainRouter = Router()

captainRouter.get('/:id', captainController.getCaptain)
captainRouter.get('/', captainController.getAllCaptains)
captainRouter.get('/unit/:unitCaptainId', captainController.getCaptainsInUnit)
captainRouter.get(
    '/sector/:baseName/:suffixName',
    captainController.getCaptainsInSector
)

export default captainRouter
