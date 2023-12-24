import { Router } from 'express'
import statsController from '../controllers/stats.controller.js'
import { getCurrentTermMiddleware } from '../middlewares/current.middleware.js'
const statsRouter = Router()

statsRouter.get('/', getCurrentTermMiddleware, statsController.getAbsenceRate)

export default statsRouter
