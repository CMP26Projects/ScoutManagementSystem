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
                body: result,
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'An error occured while retrieving the captains info'
            })
        }
    },
    allCaptainsCount: async (req, res) => {
        try {
            // Query on the database to get the captains info
            const result = await db.query(`
            SELECT COUNT(*)
            FROM "Captain"
            `);

            // Respond with the data retrieved and a successful retrieval message
            res.status(200).json({
                message: 'Successful retrieval',
                body: result, 
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'An error occured while retrieving the captains count'
            })
        }
    },
    captainInSectorInfo: async (req, res) => {
        try {
            // Extract sector base name and suffix name from the request body
            const { sectorBaseName, sectorSuffixName } = req.body;

            // Query on the database to get all the captains info in a specific sector
            const result = await db.query(`
                SELECT *
                FROM "Captain"
                WHERE "rSectorBaseName" = $1 AND "rSectorSuffixName" = $2`,
            [sectorBaseName, sectorSuffixName]
            );

            // If the query returned nothing, return a message that says that
            if (!result.rows.length) {
                return res.status(200).json({
                    message: "Count of rows returned is 0",
                });
            }

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
    }
}

export default captainController