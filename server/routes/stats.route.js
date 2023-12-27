import { Router } from 'express'
import statsController from '../controllers/stats.controller.js'
import { getCurrentTermMiddleware } from '../middlewares/current.middleware.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'
const statsRouter = Router()

statsRouter.get(
    '/scouts',
    checkRankMiddleware('general'),
    getCurrentTermMiddleware,
    statsController.getAllScoutsAbsenceRate
)
statsRouter.get(
    '/scouts/unit/:unitCaptainId',
    checkRankMiddleware('general', 'unit'),
    getCurrentTermMiddleware,
    statsController.getScoutsInUnitAbsenceRate
)
statsRouter.get(
    '/scouts/sector',
    getCurrentTermMiddleware,
    statsController.getScoutsInSectorAbsenceRate
)
statsRouter.get(
    '/scouts/:scoutId',
    getCurrentTermMiddleware,
    statsController.getScoutAbsenceRate
)

export default statsRouter
