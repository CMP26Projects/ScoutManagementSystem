import { Router } from 'express'
import alertController from '../controllers/alert.controller.js'

const alertRouter = Router()

alertRouter.post('/', alertController.createAlert)
alertRouter.get('/all', alertController.getAllAlerts)
alertRouter.get('/:id', alertController.getAlert)
alertRouter.post('/:id', alertController.sendAlert)
alertRouter.delete('/:id', alertController.deleteAlert)

export default alertRouter
