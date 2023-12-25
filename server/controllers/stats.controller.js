import db from '../database/db.js'

const statsController = {
    // @desc    Get absence rates for scouts from the start of term till now
    // @route   GET /api/stats/scouts
    // @access  Private
    getScoutsAbsenceRate: async (req, res) => {
        try {
            if (req.currentWeek.weekNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }
            let result
            if (req.captain.type === 'general') {
                result = await db.query(
                    `SELECT 
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'absent') AS absenceCount,
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'attended') AS attendanceCount 
                    FROM "ScoutAttendance"
                    WHERE "termNumber" = $1;`,
                    [req.currentTerm.termNumber]
                )
            } else if (req.captain.type === 'unit') {
                result = await db.query(
                    `SELECT 
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'absent') AS absenceCount,
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'attended') AS attendanceCount 
                    FROM "ScoutAttendance" AS SA, "Scout" AS SC, "Sector" AS SE
                    WHERE SA."termNumber" = $1 AND
                    SA."scoutId" = SC."scoutId" AND
                    SC."sectorBaseName" = SE."baseName" AND
                    SC."sectorSuffixName" = SE."suffixName" AND
                    SE."unitCaptainId" = $2;`,
                    [req.currentTerm.termNumber, req.captain.captainId]
                )
            } else {
                result = await db.query(
                    `SELECT 
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'absent') AS absenceCount,
                    COUNT(*) FILTER (WHERE "attendanceStatus" = 'attended') AS attendanceCount 
                    FROM "ScoutAttendance" AS SA, "Scout" AS SC, "Captain" AS C
                    WHERE SA."termNumber" = $1 AND
                    SA."scoutId" = SC."scoutId" AND
                    SC."sectorBaseName" = C."rSectorBaseName" AND
                    SC."sectorSuffixName" = C."rSectorSuffixName" AND
                    C."captainId" = $2;`,
                    [req.currentTerm.termNumber, req.captain.captainId]
                )
            }
            const absenceRecordsCount = result.rows[0].absenceCount
            const attendanceRecordsCount = result.rows[0].attendanceCount
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
    getCaptainsAbsenceRate: async (req, res) => {
    },
}

export default statsController
