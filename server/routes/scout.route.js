import { Router } from "express"
import scoutController from "../controllers/scout.controller.js";


const scoutRouter = Router();

scoutRouter.get('/allScouts/count')

export default scoutRouter