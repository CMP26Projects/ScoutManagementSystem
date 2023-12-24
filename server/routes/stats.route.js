import { Router } from 'express'
import statsController from '../controllers/stats.controller.js'
const statsRouter = Router()

statsRouter.get('/', statsController.getAbsenceRate)

export default statsRouter
