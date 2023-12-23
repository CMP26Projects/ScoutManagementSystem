import { Router } from "express"
import captainController from "../controllers/captain.controller.js";


const captainRouter = Router();


captainRouter.get('/allCaptains/info', captainController.allCaptainsInfo)
captainRouter.get('/allCaptains/count', captainController.allCaptainsCount)


export default captainRouter