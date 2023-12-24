import { Router } from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import authRouter from './auth.route.js'
import statsRouter from './stats.route.js'
import financeRouter from './finance.route.js'
import termRouter from './term.route.js'
import captainRouter from './captain.route.js'
import alertRouter from './alert.route.js'
import scoutRouter from './scout.route.js'
const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/stats', authMiddleware, statsRouter)
apiRouter.use('/finance', authMiddleware, financeRouter)
apiRouter.use('/term', authMiddleware, termRouter)
apiRouter.use('/captain', authMiddleware, captainRouter)
apiRouter.use('/alert', alertRouter)
apiRouter.use('/scout', authMiddleware, scoutRouter)

export default apiRouter
