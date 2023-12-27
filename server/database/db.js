import pg from 'pg'
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
} else {
    _db = new pg.Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
    })
}

const db = _db

export default db
