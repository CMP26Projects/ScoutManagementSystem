const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const db = require('../database/db')
const { jsonToArray, arrayToJson } = require('../utils/convert')

const authController = {
    signup: async (req, res) => {
        try {
            // Deconstruct the request body
            console.log(req.body)
            const {
                firstName,
                middleName,
                lastName,
                email,
                password,
                phoneNumber,
                gender,
            } = req.body

            // Check if email already exists
            /*
            const captain = await db.query('CALL getCaptain($1)', [email])
            if (captain) {
                console.log('Email is taken!!')
                return res.status(400).json({ error: 'Email is taken!!' })
            }
            */
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10)

            // Create a new Captain
            req.body = { ...req.body, password: hashedPassword }
            const params = jsonToArray(req.body)
            console.log(params)
            let newCaptain = await db.query(
                'INSERT INTO "Captain"("firstName", "middleName", "lastName", "email", "password", "phoneNumber", "gender", "type") ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, "regular")',
                params
            )

            // Generate a JWT token containing the user's id
            /*
            const token = jwt.sign(
                { id: newCaptain.captainId },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN,
                }
            )
            */

            res.status(201).json({
                message: 'Captain created successfully',
                newCaptain,
                //token,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while creating a new captain!!',
            })
        }
    },
    /*
    login: async (req, res) => {
        try {
            // Deconstruct the request body
            const { email, password } = req.body

            // Check if the user exists
            const user = await User.findOne({ email }, '+password')
            if (!user) {
                return res.status(400).json({
                    error: 'Invalid email',
                })
            }
            // Check if the password is correct
            const isValidPassword = await bcrypt.compare(
                password,
                user.password
            )
            if (!isValidPassword) {
                return res.status(400).json({
                    error: 'Invalid password',
                })
            }

            // Generate a JWT token containing the user's id
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })
            console.log(user)
            const image = user.image
            res.status(200).json({
                message: 'Logged in successfully',
                token,
                image,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while logging you in. Please try again.',
            })
        }
    },
    */

    // This controller is responsible for fetching data of the logged-in captain
    me: (req, res) => {
        try {
            res.status(200).json({ user: req.user })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: 'An error occurred while fetching data.',
            })
        }
    },
}
module.exports = authController
