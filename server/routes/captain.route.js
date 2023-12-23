import { Router } from "express"
import authMiddleware from "../middlewares/auth.middleware";


const captainRouter = Router();

// Check that the user is authorized
captainRouter.use('/', authMiddleware);