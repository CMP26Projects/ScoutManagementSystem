const jwt = require('jsonwebtoken')
const db = require('../database/db')

const authMiddleware = async (req, res, next) => {
    // Get authorization header and check if it exists
    const auth = req.headers.authorization
    if (!auth) {
        return res.status(401).json({ error: 'No token provided' })
    }

    // Check if the authorization header is "Bearer <token>"
    if (!auth.startsWith('Bearer') || auth.split(' ').length !== 2) {
        return res.status(401).json({ error: 'Invalid token, not Bearer' })
    }

    // Get token from the authorization header
    const token = auth.split(' ')[1]

    try {
        // Verify token and get captain's id
        const id = jwt.verify(token, process.env.JWT_SECRET).id

        // Get captain's data
        const result = await db.query(
            `SELECT *
            FROM "Captain" 
            WHERE "captainId" = $1;`,
            [id]
        )
        if (!result.rows.length) {
            return res.status(404).json({ error: 'Captain not found' })
        }

        // Attach captain to the request object
        req.captain = result.rows[0]

        next()
    } catch (err) {
        console.log(err)
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Provided token has expired' })
        }
        res.status(401).json({ error: 'Invalid token' })
    }
}

module.exports = authMiddleware
