import {Router} from "express"
import activitiesController from "../controllers/activities.controller.js"

const activitiesRouter = Router();

activitiesRouter.post('/', activitiesController.insertActivity)

export default activitiesRouter;