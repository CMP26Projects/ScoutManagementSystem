const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const app = express()
const PORT = process.env.PORT || 3000
const authRouter = require('./routes/auth.route')

db.connect()
    .then(() => {
        console.log('Database is connected')
    })
    .catch((err) => {
        if (err) return console.error(err)
    })

app.use(cors())
app.use(express.json())

app.use("/auth", authRouter);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, (err) => {
    if (err) return console.error(err)
    console.log(`Server started listening at port ${PORT}`)
})