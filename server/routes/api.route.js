import { Router } from 'express'
import authRouter from './auth.route.js'
import captainRouter from './captain.route.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/captain', authMiddleware, captainRouter)

export default apiRouter
