import db from '../database/db.js'

const scoutController = {
    allScoutsCount: async (req, res) => {
        try {
            const result = await db.query(`
            SELECT COUNT(*)
            FROM "Scout"
            `)

            res.status(200).json({
                message: "Successful retrieval",
                body: result,
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'An error occured while retrieving data',
                error
            })
        }
    },
    allScoutsInfo: async (req, res) => {
        try {
            const result = await db.query(`
            SELECT *
            FROM "Scout"
            `)

            res.status(200).json({
                message: "Successful retrieval",
                body: result,
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'An error occured while retrieving data',
                error
            })
        }
    },
}

export default scoutController;