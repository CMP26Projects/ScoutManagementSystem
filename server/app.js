const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin123",
    database: "scoutsmanagementsystem"
})

client.connect();

client.query('SELECT * FROM public."Activity"', (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else
    {
        console.log(err.message)
    }
})