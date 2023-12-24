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
    },
    allScoutsInUnitInfo: async (req, res) => {
        try {
            const { unitCaptainId } = req.body;

            // Make sure that the id is provided (not undefined)
            if (!unitCaptainId){
                return res.status(404).json({
                    error: "Enter a valid unit captain id"
                })
            }

            const result = await db.query(`
                SELECT scout.*
                FROM "Scout" AS scout, "Sector" AS sector
                WHERE sector."unitCaptainId" = $1 AND scout."sectorBaseName" = sector."baseName" AND scout."sectorSuffixName" = sector."suffixName";
            `,
            [unitCaptainId])

            if (!result.rows.length) {
                return res.status(404).json({
                    error: "No scouts found in this unit"
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
    allScoutsInUnitCount: async (req, res) => {
        try {
            const { unitCaptainId } = req.body;

            // Make sure that the id is provided (not undefined)
            if (!unitCaptainId){
                return res.status(404).json({
                    error: "Enter a valid unit captain id"
                })
            }

            const result = await db.query(`
                SELECT Count(*)
                FROM "Scout" AS scout, "Sector" AS sector
                WHERE sector."unitCaptainId" = $1 AND scout."sectorBaseName" = sector."baseName" AND scout."sectorSuffixName" = sector."suffixName";
            `,
            [unitCaptainId])

            if (!result.rows.length) {
                return res.status(404).json({
                    error: "No scouts found in this unit"
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
    certainScoutInfo: async (req, res) => {
        try {
            const { scoutId } = req.body;

            // Make sure that the id is provided (not undefined)
            if (!scoutId){
                return res.status(404).json({
                    error: "Enter a valid scout id"
                })
            }

            const result = await db.query(`
                SELECT *
                FROM "Scout"
                WHERE "scoutId" = $1;
            `,
            [scoutId])

            if (!result.rows.length) {
                return res.status(404).json({
                    error: "No scout found"
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
    }
}

export default scoutController;