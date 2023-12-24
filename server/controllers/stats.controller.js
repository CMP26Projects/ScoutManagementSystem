import db from '../database/db.js'

const statsController = {
    // @desc    Get all absence rates
    // @route   GET /api/stats
    // @access  Private
    getAbsenceRate: async (req, res) => {
        try {
            if (req.user.type === 'general') {
                return res.status(200)
            } else {
                return res.status(200)
            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
}

export default statsController
