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
    scoutsInSectorInfo: async (req, res) => {
        try {
            const { sectorBaseName, sectorSuffixName } = req.body;

            if (sectorBaseName === undefined && sectorSuffixName === undefined) {
                return res.status(400).json({
                    error: "Please enter the sector base name and/or suffix name"
                })
            }

            const result = await db.query(`
                SELECT *
                FROM "Scout"
                WHERE "sectorBaseName" = $1 AND "sectorSuffixName" = $2
            `,
            [sectorBaseName, sectorSuffixName])

            if (!result.rows.length) {
                return res.status(404).json({
                    error: "No scouts found in this sector"
                })
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
    },
    scoutsInSectorCount: async (req, res) => {
        try {
            const { sectorBaseName, sectorSuffixName } = req.body;

            if (sectorBaseName === undefined && sectorSuffixName === undefined) {
                return res.status(400).json({
                    error: "Please enter the sector base name and/or suffix name"
                })
            }

            const result = await db.query(`
                SELECT COUNT(*)
                FROM "Scout"
                WHERE "sectorBaseName" = $1 AND "sectorSuffixName" = $2
            `,
            [sectorBaseName, sectorSuffixName])

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

export default scoutController;