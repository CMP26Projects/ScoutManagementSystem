import pg from 'pg'
import cron from 'node-cron'
import dotenv from 'dotenv'

dotenv.config()

let _db
if (process.env.DB === 'online') {
    _db = new pg.Pool({
        connectionString: process.env.DB_URI,
        ssl: {
            rejectUnauthorized: false,
        },
    })
}
else {
    _db = new pg.Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
    })
}

const db = _db

// Run the cron job every Sunday at 00:00
cron.schedule('0 0 * * 0', async () => {
    try {
        // Get the current date
        const currentDate = new Date()

        // Get the current term
        const result = await db.query(
            `SELECT * FROM "Term" WHERE "termNumber" IN 
            (SELECT COALESCE(MAX("termNumber"), 0) FROM "Term");`
        )
        if (!result.rows.length || result.rows[0].endDate <= currentDate) return

        const currentTermNumber = result.rows[0].termNumber

        // Get the current week
        result = await db.query(
            `SELECT COALESCE(MAX("weekNumber"), 0) FROM "Week" WHERE "termNumber" = $1;`,
            [currentTermNumber]
        )
        const { currentWeekNumber } = result.rows[0]

        // Add a new week
        result = await db.query(
            `INSERT INTO "Week"
            VALUES ($1, $2, $3)
            RETURNING *;`,
            [currentWeekNumber + 1, false, currentDate, currentTermNumber]
        )
    } catch (error) {
        console.log(error)
    }
})

export default db
