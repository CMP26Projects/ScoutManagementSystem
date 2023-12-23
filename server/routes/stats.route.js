import { Router } from 'express'
import statsController from '../controllers/stats.controller.js'
import checkRankMiddleware from '../middlewares/checkrank.middleware.js'
const statsRouter = Router()

statsRouter.get('/', statsController.getAllAbsenceRate)

export default statsRouter
