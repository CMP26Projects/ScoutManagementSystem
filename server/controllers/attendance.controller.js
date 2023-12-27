import db from "../database/db.js"

const attendanceController = {
    // @desc    Insert a new attendance record for a scout in a certain sector
    // @route   POST /api/attendance/
    // @access  Private
    insertAttendance: async (req, res) => {
        try {
            const { scoutId, weekNumber, termNumber, attendanceStatus } = req.body

            // Get the scout info to check if the provided scout id exists or not
            const scoutInfo = await db.query(`
                SELECT * 
                FROM "Scout" 
                WHERE "scoutId" = $1;
            `,
            [scoutId]
            )

            if (scoutInfo.rowCount === 0) {
                return res.status(404).json({
                    error: "No scout exist with this id"
                })
            }

            // Get the week info to check if the provided week & term numbers exist or not
            const weekInfo = await db.query(`
                SELECT *
                FROM "Week"
                WHERE "weekNumber" = $1 AND "termNumber" = $2;
            `,
            [weekNumber, termNumber])

            if (weekInfo.rowCount === 0) {
                return res.status(404).json({
                    error: "Please enter an existing weekNumber & termNumber"
                })
            }

            // Insert a new attendance record into the database
            const result = await db.query(`
                INSERT INTO "ScoutAttendance" VALUES ($1, $2, $3, $4) RETURNING *;
            `,
            [scoutId, weekNumber, termNumber, attendanceStatus])

            // If insertion failed return an error
            if (result.rowCount === 0) {
                return res.status(500).json({
                    error: "Insertion failed"
                })
            }

            // Return a success message
            res.status(200).json({
                message: "Successful insertion",
                body: result.rows,
                count: result.rowCount,
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occured while inserting a new attendance',
                body: error,
            })
        }
    },

    // @desc    Get all attendance records for all the scouts in a certain sector in a certain week & term
    // @route   GET /api/attendance/sector/:baseName/:suffixName/:weekNumber/:termNumber
    // @access  Private
    getSectorAttendance: async (req, res) => {
        try {
            const { baseName, suffixName, weekNumber, termNumber } = req.params

            const result = await db.query(`
                SELECT "ScoutAttendance".*
                FROM "Scout", "ScoutAttendance"
                WHERE "Scout"."sectorBaseName" = $1 AND "Scout"."sectorSuffixName" = $2
                AND "ScoutAttendance"."weekNumber" = $3 AND "ScoutAttendance"."termNumber" = $4
                AND "ScoutAttendance"."scoutId" = "Scout"."scoutId";
            `,
            [baseName, suffixName, weekNumber, termNumber])

            if (result.rowCount === 0) {
                return res.status(404).json({
                    error: "No data exists for the provided info"
                })
            }

            res.status(200).json({
                message: "Successful retrieval",
                body: result.rows,
                count: result.rowCount
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occured while retrieving sector attendance',
                body: error,
            })
        }
    },

    // @desc    Get attendance records for a certain scout in a certain week & term
    // @route   GET /api/attendance/:scoutId/:weekNumber/:termNumber
    // @access  Private
    getScoutAttendance: async (req, res) => {
        try {
            const { scoutId, weekNumber, termNumber } = req.params

            const result = await db.query(`
                SELECT *
                FROM "ScoutAttendance"
                WHERE "scoutId" = $1 AND "weekNumber" = $2 AND "termNumber" = $3
            `,
            [scoutId, weekNumber, termNumber])

            res.status(200).json({
                message: "Successful retrieval",
                body: result.rows,
                count: result.rowCount,
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occured while retrieving sector attendance',
                body: error,
            })
        }
    }
}

export default attendanceController;