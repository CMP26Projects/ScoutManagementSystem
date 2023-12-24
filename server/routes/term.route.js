import { Router } from 'express'
import termController from '../controllers/term.controller.js'
const termRouter = Router()

// Term routes
termRouter.get('/', termController.getTerm)
termRouter.post('/', termController.addTerm)
termRouter.patch('/', termController.updateTerm)

// Week routes
termRouter.get('/week', termController.getWeek)
termRouter.patch('/week', termController.cancelWeek)

// Other routes
termRouter.get('/remaining', termController.getRemainingWeeks)

export default termRouter
