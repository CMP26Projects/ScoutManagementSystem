import { Router } from 'express'
import termController from '../controllers/term.controller.js'
const termRouter = Router()

// Term routes
termRouter.get('/:termNumber', termController.getTerm)
termRouter.post('/:termNumber', termController.addTerm)
termRouter.patch('/:termNumber', termController.updateTerm)
termRouter.delete('/:termNumber', termController.deleteTerm)

// Week routes
termRouter.get('/:termNumber/:weekNumber', termController.getWeek)
termRouter.post('/:termNumber/:weekNumber', termController.addWeek)
termRouter.delete('/:termNumber/:weekNumber', termController.deleteWeek)

// Other routes
termRouter.get('/remaining', termController.getRemainingWeeks)

export default termRouter
