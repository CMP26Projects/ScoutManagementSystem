import db from '../database/db.js'

const alertController = {
    getAlert: async (req, res) => {
        const { id } = req.params

        const alert = await db.query(
            `SELECT * FROM "Notification" WHERE "NotificationId" = $1;`,
            [id]
        )

        if (!alert) return res.status(404).json({ error: 'Alert not found' })

        res.status(200).json({
            message: 'Alert successfully found',
            body: alert,
        })
    },

    CreateAlert: async (req, res) => {
        const { title, message, type } = req.body
        if (!title || !message || !type)
            return res.status(400).json({ error: 'Missing input' })

        const newAlert = await db.query(
            `INSERT INTO "Notification" ("message")
            VALUES($1) RETURNING *;`,
            [message]
        )

        if (!newAlert) return res.status(400).json({ error: 'Cannot Post' })

        res.status(200).json({
            message: 'Alert successfully created',
            body: newAlert,
        })
    },

    DeleteAlert: async (req, res) => {
        const { id } = req.params

        const Alerts = await db.query(`SELECT * FROM "Notification";`)

        const alertsArr = Alerts.rows

        if (!alertsArr.find((item) => item.NotificationId === Number(id)))
            return res
                .status(404)
                .json({ error: 'Alert to be deleted not found' })

        try {
            await db.query(
                `DELETE FROM "Notification" WHERE "NotificationId" = $1;`,
                [id]
            )

            alertsArr.filter((item) => item.NotificationId !== Number(id))
            return res.status(200).json({
                message: 'Alert successfully deleted',
                body: alertsArr,
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                error: 'An error occured while deleting alert',
            })
        }
    },

    getAllAlerts: async (req, res) => {
        const Alerts = await db.query(`SELECT * FROM "Notification";`)

        if (!Alerts.rows.length)
            return res.status(400).json({ error: 'No alerts found' })

        res.status(200).json({
            message: 'get Alerts successfully',
            body: Alerts.rows,
        })
    },
}

export default alertController
