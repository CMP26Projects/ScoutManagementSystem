import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import apiRouter from "./routes/api.route.js"
import { notFound, errorHandler } from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = process.env.PORT || 3000

db.connect()
    .then(() => {
        console.log('Database is connected')
    })
    .catch((err) => {
        if (err) return console.error(err)
    })

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, (err) => {
    if (err) return console.error(err)
    console.log(`Server started listening at port ${PORT}`)
})
