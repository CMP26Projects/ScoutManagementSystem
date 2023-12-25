import {Router} from "express"
import sectorController from "../controllers/sector.controller.js"

const sectorRouter = Router();

sectorRouter.get('/all', sectorController.getAllSectors)

export default sectorRouter;