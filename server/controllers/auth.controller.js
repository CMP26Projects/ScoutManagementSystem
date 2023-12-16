const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../database/db')
const { jsonToArray, arrayToJson } = require('../utils/convert')

const authController = {
    signup: async (req, res) => {
        try {
            // Deconstruct the request body
            const { email, password } = req.body

            // Check if email already exists
            const captain = await db.query(
                `SELECT "email", "password"
                FROM "Captain" 
                WHERE "email" = $1;`,
                [email]
            )
            if (captain.rows.length) {
                return res.status(400).json({ error: 'Email is taken!!' })
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10)

            // Create a new Captain
            req.body = { ...req.body, password: hashedPassword }
            const params = jsonToArray(req.body)
            const result = await db.query(
                `INSERT INTO "Captain"("firstName", "middleName", "lastName", "email", "password", "phoneNumber", "gender", "type")
                VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
                params.concat(['regular'])
            )
            const newCaptain = result.rows[0]

            // Generate a JWT token containing the captain's id
            // Bearer token is the token that we will send to the client
            const token = jwt.sign(
                { id: newCaptain.captainId },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN,
                }
            )

            // Send the response
            res.status(201).json({
                message: 'Captain created successfully',
                newCaptain,
                token,
            })
        } catch (error) {
            console.log(error.detail)
            res.status(500).json({
                error: 'An error occurred while creating a new captain!!',
            })
        }
    },

    login: async (req, res) => {
        try {
            // Deconstruct the request body
            const { email, password } = req.body

            // Check if email already exists
            const result = await db.query(
                `SELECT "email", "password"
                FROM "Captain" 
                WHERE "email" = $1;`,
                [email]
            )
            if (!result.rows.length) {
                return res.status(400).json({
                    error: 'Invalid email',
                })
            }

            // Get Captain's data
            const captain = result.rows[0]

            // Check if the password is correct
            const isCorrect = await bcrypt.compare(password, captain.password)
            if (!isCorrect) {
                return res.status(400).json({
                    error: 'Invalid password',
                })
            }

            // Generate a JWT token containing the captain's id
            // Bearer token is the token that we will send to the client
            const token = jwt.sign(
                { id: captain.captainId },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN,
                }
            )

            // Send the response
            res.status(200).json({
                message: 'Logged in successfully',
                token,
            })
        } catch (error) {
            console.log(error.detail)
            res.status(500).json({
                error: 'An error occurred while logging you in',
            })
        }
    },

    // This controller is responsible for fetching data of the logged-in captain
    me: (req, res) => {
        try {
            res.status(200).json({ user: req.captain })
        } catch (error) {
            console.log(error.detail)
            res.status(500).json({
                error: 'An error occurred while fetching data.',
            })
        }
    },
}
module.exports = authController
