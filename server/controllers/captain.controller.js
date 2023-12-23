import db from '../database/db.js'

const captainController = {
    allCaptainsInfo: async (req, res) => {
        try {
            // Query on the database to get the captains info
            const result = await db.query(`
            SELECT *
            FROM "Captain"
            `)

            // Respond with the data retrieved and a successful retrieval message
            res.status(200).json({
                message: 'Successful retrieval',
                result,
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'An error occured while retrieving the captains info'
            })
        }
    },
}

export default captainController