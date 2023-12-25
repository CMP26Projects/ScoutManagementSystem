import db from '../database/db.js'

const statsController = {
    // @desc    Get absence rates for scouts from the start of term till now
    // @route   GET /api/stats/scouts
    // @access  Private
    getScoutsAbsenceRate: async (req, res) => {
        try {
            if (req.currentTerm.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }
            let result
            if (req.captain.type === 'general') {
                result = await db.query(
                    `SELECT 
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'absent') AS absence_count,
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'attended') AS attendance_count
                    FROM "ScoutAttendance" AS S, "Week" AS W
                    WHERE
                    S."weekNumber" = W."weekNumber" AND
                    S."termNumber" = W."termNumber" AND
                    W."cancelled" = false AND
                    S."termNumber" = $1;`,
                    [req.currentTerm.termNumber]
                )
            } else if (req.captain.type === 'unit') {
                result = await db.query(
                    `SELECT 
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'absent') AS absence_count,
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'attended') AS attendance_count 
                    FROM "ScoutAttendance" AS SA, "Scout" AS SC, "Sector" AS SE, "Week" AS W
                    WHERE
                    SA."weekNumber" = W."weekNumber" AND
                    SA."termNumber" = W."termNumber" AND
                    SA."scoutId" = SC."scoutId" AND
                    SC."sectorBaseName" = SE."baseName" AND
                    SC."sectorSuffixName" = SE."suffixName" AND
                    W."cancelled" = false AND
                    SA."termNumber" = $1 AND
                    SE."unitCaptainId" = $2;`,
                    [req.currentTerm.termNumber, req.captain.captainId]
                )
            } else {
                result = await db.query(
                    `SELECT 
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'absent') AS absence_count,
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'attended') AS attendance_count 
                    FROM "ScoutAttendance" AS SA, "Scout" AS SC, "Captain" AS C , "Week" AS W
                    WHERE
                    SA."weekNumber" = W."weekNumber" AND
                    SA."termNumber" = W."termNumber" AND
                    SA."scoutId" = SC."scoutId" AND
                    SC."sectorBaseName" = C."rSectorBaseName" AND
                    SC."sectorSuffixName" = C."rSectorSuffixName" AND
                    W."cancelled" = false AND
                    SA."termNumber" = $1 AND
                    C."captainId" = $2;`,
                    [req.currentTerm.termNumber, req.captain.captainId]
                )
            }
            const absenceRecordsCount = Number(result.rows[0].absence_count)
            const attendanceRecordsCount = Number(result.rows[0].attendance_count)
            if (absenceRecordsCount + attendanceRecordsCount === 0) {
                return res.status(400).json({
                    error: 'There is no attendance records',
                })
            }
            const absenceRate =
                absenceRecordsCount /
                (absenceRecordsCount + attendanceRecordsCount)
            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: absenceRate,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    // @desc    Get all absence rates from the start of term till now
    // @route   GET /api/stats/captains
    // @access  Private
    getCaptainsAbsenceRate: async (req, res) => {},
}

export default statsController
