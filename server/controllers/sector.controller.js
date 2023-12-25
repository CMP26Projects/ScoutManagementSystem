import db from '../database/db.js'

const sectorController = {
    // @desc    Get all sectors (info and count)
    // @route   GET /api/sector/all
    // @access  Private
    getAllSectors: async (req, res) => {
        try {
            const result = await db.query(`
                SELECT *
                FROM "Sector"
            `)

            res.status(200).json({
                message: "Successful retrieval",
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

    // @desc    Get sector by id (baseName and suffixName send as params)
    // @route   GET /api/sector/:baseName/:suffixName
    // @access  Private
    getSector: async (req, res) => {
        try {
            const { baseName, suffixName } = req.params

            const result = await db.query(`
                SELECT *
                FROM "Sector"
                WHERE "baseName" = $1 AND "suffixName" = $2;
            `,
            [baseName, suffixName]);

            if (result.rowCount === 0) {
                return res.status(404).json({
                    error: "No sector found with this name"
                })
            }

            res.status(200).json({
                message: "Successful retrieval",
                body: result.rows,
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occured while retrieving the captains info',
                body: error,
            })
        }
    },
}

export default sectorController;