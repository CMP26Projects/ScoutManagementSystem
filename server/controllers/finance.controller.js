import db from '../database/db.js'

const financeController = {
    // @desc    Get a budget
    // @route   GET /api/finance/budget
    // @access  Private
    getBudget: async (req, res) => {
        try {
            // get subsciptions
            return res.status(200)
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
}

export default financeController
