import db from '../database/db.js'

const captainController = {
    getAllCaptains: async (req, res) => {
        try {
            // Query on the database to get the captains info
            const result = await db.query(`SELECT * FROM "Captain"`)

            // Respond with the data retrieved and a successful retrieval message
            res.status(200).json({
                message: 'Successful retrieval',
                body: result.rows,
                count: result.rowCount,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occured while retrieving the captains info',
                body: error,
            })
        }
    },
    getCaptainsInSector: async (req, res) => {
        try {
            const { baseName, suffixName } = req.params

            // Query on the database to get all the captains info in a specific sector
            const result = await db.query(
                `SELECT *
                FROM "Captain"
                WHERE "rSectorBaseName" = $1 AND "rSectorSuffixName" = $2`,
                [baseName, suffixName]
            )

            res.status(200).json({
                message: 'Successful retrieval',
                body: result.rows,
                count: result.rowCount,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    getCaptainsInUnit: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            // Query to get the id
            const result = await db.query(
                `SELECT C.*
                FROM "Captain" AS C, "Sector" AS S
                WHERE S."unitCaptainId" = $1 AND
                C."rSectorBaseName" = S."baseName" AND
                C."rSectorSuffixName" = S."suffixName";`,
                [unitCaptainId]
            )

            // Return the data
            res.status(200).json({
                message: 'Successful retrieval',
                body: result.rows,
                count: result.rowCount,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    getCaptain: async (req, res) => {
        try {
            // Extract the captain ID from the request params
            const { captainId } = req.params

            // Query on the database to get that captain info
            const result = await db.query(
                `SELECT *
                FROM "Captain"
                WHERE "captainId" = $1`,
                [captainId]
            )

            // If captain doesn't exist return an error message
            if (!result.rows.length) {
                return res.status(404).json({
                    error: 'Captain not found!',
                })
            }

            // Return the data of the captain
            res.status(200).json({
                message: 'Successful retrieval',
                body: result.rows[0],
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    setCaptainType: async (req, res) => {
        try {
            const { captainId } = req.params
            const { type } = req.body

            //if (type != 'regular' && type != 'unit' && type != 'general') {
            //    
            //}

            const result = await db.query(`
                UPDATE "Captain"
                SET "type" = $2
                WHERE "captainId" = $1
                RETURNING *
            `,
            [captainId, type])

            res.status(200).json({
                message: "Successful update",
                body: result,
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    }
}

export default captainController
