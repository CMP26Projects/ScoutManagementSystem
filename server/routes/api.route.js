import { Router } from 'express'
import authRouter from './auth.route.js'
import captainRouter from './captain.route.js'
import authMiddleware from '../middlewares/auth.middleware.js'
import alertRouter from './alert.route.js'
import scoutRouter from './scout.route.js'

const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/captain', authMiddleware, captainRouter)
apiRouter.use('/notifications', alertRouter)
apiRouter.use('/scout', authMiddleware, scoutRouter)

export default apiRouter
