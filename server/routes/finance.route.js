import { Router } from 'express'
import financeController from '../controllers/finance.controller.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'
const financeRouter = Router()

financeRouter.get('/budget', checkRankMiddleware('general'), financeController.getBudget)

export default financeRouter