import { Router } from 'express'
import termController from '../controllers/term.controller.js'
import checkRankMiddleware from '../middlewares/checkRank.middleware.js'
const termRouter = Router()

// Term routes
termRouter.get('/', termController.getTerm)
termRouter.post('/', checkRankMiddleware('general'), termController.addTerm)
termRouter.patch('/', checkRankMiddleware('general'), termController.updateTerm)

// Week routes
termRouter.get('/week', termController.getWeek)
termRouter.patch('/week', checkRankMiddleware('general'), termController.cancelWeek)

// Other routes
termRouter.get('/remaining', termController.getRemainingWeeks)

export default termRouter
