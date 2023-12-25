import { Router } from 'express'
import alertController from '../controllers/alert.controller.js'

const alertRouter = Router()

alertRouter.post('/', alertController.createAlert)
alertRouter.get('/:id', alertController.getAlert)
alertRouter.post('/:id', alertController.sendAlert)
alertRouter.delete('/:id', alertController.deleteAlert)
alertRouter.get('/', alertController.getAllAlerts)

export default alertRouter
