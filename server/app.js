const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const pg = require('pg')

dotenv.config()
const PORT = process.env.PORT || 3000
const sever = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
})

sever
    .connect()
    .then(() => {
        console.log('Database is connected')
    })
    .catch((err) => {
        if (err) return console.error(err)
    })

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, (err) => {
    if (err) return console.error(err)
    console.log(`Server started listening at port ${PORT}`)
})
