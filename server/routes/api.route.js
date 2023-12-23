import { Router } from 'express'
import authRouter from './auth.route.js'
import captainRouter from './captain.route.js'

const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/captain', captainRouter)

export default apiRouter
