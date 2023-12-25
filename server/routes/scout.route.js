import { Router } from 'express'
import scoutController from '../controllers/scout.controller.js'

const scoutRouter = Router()

scoutRouter.post('/', scoutController.insertScout)
scoutRouter.get('/:id', scoutController.getScout)
scoutRouter.put('/:id', scoutController.updateScout)
scoutRouter.get('/all', scoutController.getAllScouts)
scoutRouter.get('/unit/:unitCaptainId', scoutController.getScoutsInUnit)
scoutRouter.get(
    '/sector/:baseName/:suffixName',
    scoutController.getScoutsInSector
)

export default scoutRouter
