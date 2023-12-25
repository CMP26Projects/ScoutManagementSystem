import { Router } from 'express'
import statsController from '../controllers/stats.controller.js'
import { getCurrentTermMiddleware } from '../middlewares/current.middleware.js'
const statsRouter = Router()

statsRouter.get(
    '/scouts',
    getCurrentTermMiddleware,
    statsController.getScoutsAbsenceRate
)
statsRouter.get(
    '/captains',
    getCurrentTermMiddleware,
    statsController.getCaptainsAbsenceRate
)

export default statsRouter
