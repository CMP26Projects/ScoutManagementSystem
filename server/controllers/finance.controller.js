import db from '../database/db.js'

const financeController = {
    // @desc    Get a budget
    // @route   GET /api/finance/budget
    // @access  Private
    getBudget: async (req, res) => {
        try {
            // get income
            let result = await db.query(
                `SELECT COALESCE(SUM(value), 0) AS sum FROM "FinanceItem" WHERE "type" = 'income'`
            )
            const income = result.rows[0].sum

            // get expense
            result = await db.query(
                `SELECT COALESCE(SUM(value), 0) AS sum FROM "FinanceItem" WHERE "type" = 'expense'`
            )
            const expense = result.rows[0].sum

            const budget = income - expense
            res.status(200).json({
                message: 'Get budget successfully',
                body: budget,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while getting the budget',
            })
        }
    },
}

export default financeController
