import { Router } from 'express'
import authRouter from './auth.route.js'
import authMiddleware from '../middlewares/auth.middleware.js'
const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/stats', authMiddleware, authRouter)
apiRouter.use('/finance', authMiddleware, authRouter)
apiRouter.use('/term', authMiddleware, authRouter)

export default apiRouter
