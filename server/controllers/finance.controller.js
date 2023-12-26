import db from '../database/db.js'

const financeController = {
    // @desc    Get a budget
    // @route   GET /api/finance/budget
    // @access  Private
    getBudget: async (req, res) => {
        try {
            // get income
            let result = await db.query(
                `SELECT COALESCE(SUM(value), 0) AS sum FROM "FinanceItem"
                WHERE "type" = 'income';`
            )
            const income = result.rows[0].sum

            // get expense
            result = await db.query(
                `SELECT COALESCE(SUM(value), 0) AS sum FROM "FinanceItem"
                WHERE "type" = 'expense';`
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

    // @desc    Get income
    // @route   GET /api/finance/income
    // @access  Private
    getIncome: async (req, res) => {
        try {
            const result = await db.query(
                `SELECT COALESCE(SUM(value), 0) AS sum FROM "FinanceItem"
                WHERE "type" = 'income';`
            )
            const income = result.rows[0].sum

            res.status(200).json({
                message: 'Get income successfully',
                body: income,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while getting the income',
            })
        }
    },

    // @desc    Get expense
    // @route   GET /api/finance/expense
    // @access  Private
    getExpense: async (req, res) => {
        try {
            const result = await db.query(
                `SELECT COALESCE(SUM(value), 0) AS sum FROM "FinanceItem"
                WHERE "type" = 'expense';`
            )
            const expense = result.rows[0].sum

            res.status(200).json({
                message: 'Get expense successfully',
                body: expense,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while getting the expense',
            })
        }
    },

    // @desc    Add a subscription
    // @route   POST /api/finance/subscription
    // @access  Private
    addSubscription: async (req, res) => {
        try {
            const { value, sectorBaseName, sectorSuffixName } = req.body

            if (req.currentWeek.weekNumber === 0) {
                return res.status(400).json({
                    error: 'No week is currently active',
                })
            }

            let result = await db.query(
                `INSERT INTO "FinanceItem" ("value", "timestamp", "type")
                VALUES ($1, NOW(), 'income') RETURNING *;`,
                [value]
            )

            const financeItem = result.rows[0]

            result = await db.query(
                `INSERT INTO "Subscription" ("itemId", "sectorBaseName", "sectorSuffixName", "weekNumber", "termNumber")
                VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
                [
                    financeItem.itemId,
                    sectorBaseName,
                    sectorSuffixName,
                    req.currentWeek.weekNumber,
                    req.currentWeek.termNumber,
                ]
            )

            const subscription = result.rows[0]

            res.status(200).json({
                message: 'Add subscription successfully',
                body: { financeItem: financeItem, subscription: subscription },
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while adding subscription',
            })
        }
    },

    // @desc    Add an other item
    // @route   POST /api/finance/otherItem
    // @access  Private
    addOtherItem: async (req, res) => {
        try {
            const { value, type, description } = req.body

            let result = await db.query(
                `INSERT INTO "FinanceItem" ("value", "timestamp", "type")
                VALUES ($1, NOW(), $2) RETURNING *;`,
                [value, type]
            )

            const financeItem = result.rows[0]

            result = await db.query(
                `INSERT INTO "OtherItem" ("description", "itemId", "generalCaptainId")
                VALUES ($1, $2, $3) RETURNING *;`,
                [description, financeItem.itemId, req.captain.captainId]
            )

            const otherItem = result.rows[0]

            res.status(200).json({
                message: 'Add other item successfully',
                body: { financeItem: financeItem, otherItem: otherItem },
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while adding other item',
            })
        }
    },
}

export default financeController
