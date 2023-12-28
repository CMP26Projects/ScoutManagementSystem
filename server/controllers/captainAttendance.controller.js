import db from "../database/db.js"

const captainAttendanceController = {
    getSectorAttendance: async (req, res) => {
        try {
            const { baseName, suffixName, weekNumber, termNumber } = req.query

            const result = await db.query(`
                SELECT "Captain".*, "CaptainAttendance".* FROM "Captain" LEFT JOIN "CaptainAttendance" ON "Captain"."captainId" = "CaptainAttendance"."captainId"
                AND "CaptainAttendance"."weekNumber" = $3 AND "CaptainAttendance"."termNumber" = $4
                INNER JOIN "Sector" ON "Sector"."baseName" = "Captain"."rSectorBaseName" AND "Sector"."suffixName" = "Captain"."rSectorSuffixName"
                WHERE "Sector"."baseName" = $1 AND "Sector"."suffixName" = $2;
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
                error: 'An error occured while retrieving captain Attendance',
                body: error,
            })
        }
    }
}

export default captainAttendanceController;