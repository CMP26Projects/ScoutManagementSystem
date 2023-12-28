import { Router } from "express"
import attendanceController from "../controllers/attendance.controller.js"

const attendanceRouter = Router()

// Insert a new attendance for a scout
attendanceRouter.post('/', attendanceController.upsertAttendance)
attendanceRouter.get('/sector/all', attendanceController.getSectorAttendance)
attendanceRouter.get('/:scoutId/:weekNumber/:termNumber', attendanceController.getScoutAttendance)

export default attendanceRouter;