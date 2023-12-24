import { Router } from "express"
import captainController from "../controllers/captain.controller.js";


const captainRouter = Router();


captainRouter.get('/allCaptains/info', captainController.allCaptainsInfo)
captainRouter.get('/allCaptains/count', captainController.allCaptainsCount)
captainRouter.get('/captainsInSector/info', captainController.captainsInSectorInfo)
captainRouter.get('/captainsInSector/count', captainController.captainsInSectorCount)
captainRouter.get('/ceratinCaptain/info', captainController.captainInfo)
captainRouter.get('/allCaptainsInUnit/info', captainController.allCaptainsInUnitInfo)


export default captainRouter