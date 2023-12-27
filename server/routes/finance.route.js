import { Router } from 'express'
import financeController from '../controllers/finance.controller.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'
import { getCurrentWeekMiddleware } from '../middlewares/current.middleware.js'
const financeRouter = Router()

financeRouter.get(
    '/',
    checkRankMiddleware('general'),
    financeController.getBudget
)
financeRouter.get(
    '/income',
    checkRankMiddleware('general'),
    financeController.getIncome
)
financeRouter.get(
    '/expense',
    checkRankMiddleware('general'),
    financeController.getExpense
)
financeRouter.post(
    '/subscription',
    getCurrentWeekMiddleware,
    financeController.addSubscription
)
financeRouter.post(
    '/otherItem',
    checkRankMiddleware('general'),
    financeController.addOtherItem
)

export default financeRouter
