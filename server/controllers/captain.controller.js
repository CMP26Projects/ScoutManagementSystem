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
            console.log(error)
            res.status(500).json({
                error: 'An error occured while retrieving the captains info',
                body: error,
            })
        }
    },
    allCaptainsCount: async (req, res) => {
        try {
            // Query on the database to get the captains info
            const result = await db.query(`
            SELECT COUNT(*)
            FROM "Captain"
            `)

            // Respond with the data retrieved and a successful retrieval message
            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occured while retrieving the captains count',
                body: error,
            })
        }
    },
    captainsInSectorInfo: async (req, res) => {
        try {
            // Extract sector base name and suffix name from the request body
            const { rSectorBaseName, rSectorSuffixName } = req.body

            // Query on the database to get all the captains info in a specific sector
            const result = await db.query(
                `
                SELECT *
                FROM "Captain"
                WHERE "rSectorBaseName" = $1 AND "rSectorSuffixName" = $2`,
                [rSectorBaseName, rSectorSuffixName]
            )

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    captainsInSectorCount: async (req, res) => {
        try {
            // Extract sector base name and suffix name from the request body
            const { rSectorBaseName, rSectorSuffixName } = req.body

            // Query on the database to get all the captains count in a specific sector
            const result = await db.query(
                `
                SELECT COUNT(*)
                FROM "Captain"
                WHERE "rSectorBaseName" = $1 AND "rSectorSuffixName" = $2`,
                [rSectorBaseName, rSectorSuffixName]
            )

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    captainInfo: async (req, res) => {
        try {
            // Extract the captain ID from the request params
            const { captainId } = req.params

            // Query on the database to get that captain info
            const result = await db.query(
                `
                SELECT *
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
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    allCaptainsInUnitInfo: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            // Make sure that the id is provided (not undefined)
            if (!unitCaptainId) {
                return res.status(404).json({
                    error: 'Enter a valid unit captain id',
                })
            }

            // Query to get the id
            const result = await db.query(
                `
                SELECT C.*
                FROM "Captain" AS C, "Sector" AS S
                WHERE S."unitCaptainId" = $1 AND C."rSectorBaseName" = S."baseName" AND C."rSectorSuffixName" = S."suffixName";`,
                [unitCaptainId]
            )

            // If there is no result found, return 404 not found error (This might not be an error)
            if (!result.rows.length) {
                return res.status(404).json({
                    error: 'Captains Not Found',
                })
            }

            // Return the data
            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    allCaptainsInUnitCount: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            // Make sure that the id is provided (not undefined)
            if (!unitCaptainId) {
                return res.status(404).json({
                    error: 'Enter a valid unit captain id',
                })
            }

            // Query to get the id
            const result = await db.query(
                `
                SELECT COUNT(*)
                FROM "Captain" AS C, "Sector" AS S
                WHERE S."unitCaptainId" = $1 AND C."rSectorBaseName" = S."baseName" AND C."rSectorSuffixName" = S."suffixName";`,
                [unitCaptainId]
            )

            // Return the data
            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
}

export default captainController
