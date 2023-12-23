import { Router } from 'express'
import financeController from '../controllers/finance.controller.js'
const financeRouter = Router()

financeRouter.get('/budget', financeController.getBudget)

export default financeRouter