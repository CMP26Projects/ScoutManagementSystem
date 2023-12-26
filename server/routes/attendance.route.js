import { Router } from "express"
import attendanceController from "../controllers/attendance.controller.js"

const attendanceRouter = Router()

// Insert a new attendance for a scout
attendanceRouter.post('/', attendanceController.insertAttendance)
attendanceRouter.get('/sector/:baseName/:suffixName/:weekNumber/:termNumber', attendanceController.getSectorAttendance)

export default attendanceRouter;