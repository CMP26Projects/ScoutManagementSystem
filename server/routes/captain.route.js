import { Router } from "express"
import authMiddleware from "../middlewares/auth.middleware.js";
import captainController from "../controllers/captain.controller.js";


const captainRouter = Router();

// Check that the user is authorized
//captainRouter.use('/', authMiddleware);

captainRouter.get('/allCaptains/info', captainController.allCaptainsInfo)

export default captainRouter