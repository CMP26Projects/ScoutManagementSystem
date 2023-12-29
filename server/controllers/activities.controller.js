import db from "../database/db.js"

const activitiesController = {
    insertActivity: async (req, res) => {
        try {
            const { place, weekNumber, termNumber, day, type } = req.body

            const result = await db.query(`
                INSERT INTO "Activity" ("place", "weekNumber", "termNumber", "day", "type")
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `,
            [place, weekNumber, termNumber, day, type])

            if (result.rowCount === 0) {
                return res.status(400).json({
                    error: "Insertion failed",
                })
            }

            res.status(200).json({
                message: "Successful insertion",
                body: result.rows,
                count: result.rowCount,
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while inserting a new activity',
                body: error,
            })
        }
    }
}

export default activitiesController