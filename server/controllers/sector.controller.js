import db from '../database/db.js'

const sectorController = {
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
    }
}

export default sectorController;