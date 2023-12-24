import db from '../database/db.js'

const scoutController = {
    allScoutsCount: async (req, res) => {
        try {
            const result = await db.query(`
                SELECT COUNT(*)
                FROM "Scout"
            `)

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    allScoutsInfo: async (req, res) => {
        try {
            const result = await db.query(`
                SELECT *
                FROM "Scout"
            `)

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    scoutsInSectorInfo: async (req, res) => {
        try {
            const { sectorBaseName, sectorSuffixName } = req.body

            if (
                sectorBaseName === undefined &&
                sectorSuffixName === undefined
            ) {
                return res.status(400).json({
                    error: 'Please enter the sector base name and/or suffix name',
                })
            }

            const result = await db.query(
                `
                SELECT *
                FROM "Scout"
                WHERE "sectorBaseName" = $1 AND "sectorSuffixName" = $2
            `,
                [sectorBaseName, sectorSuffixName]
            )

            if (!result.rows.length) {
                return res.status(404).json({
                    error: 'No scouts found in this sector',
                })
            }

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    scoutsInSectorCount: async (req, res) => {
        try {
            const { sectorBaseName, sectorSuffixName } = req.body

            if (
                sectorBaseName === undefined &&
                sectorSuffixName === undefined
            ) {
                return res.status(400).json({
                    error: 'Please enter the sector base name and/or suffix name',
                })
            }

            const result = await db.query(
                `
                SELECT COUNT(*)
                FROM "Scout"
                WHERE "sectorBaseName" = $1 AND "sectorSuffixName" = $2
            `,
                [sectorBaseName, sectorSuffixName]
            )

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    allScoutsInUnitInfo: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            // Make sure that the id is provided (not undefined)
            if (!unitCaptainId) {
                return res.status(404).json({
                    error: 'Enter a valid unit captain id',
                })
            }

            const result = await db.query(
                `
                SELECT scout.*
                FROM "Scout" AS scout, "Sector" AS sector
                WHERE sector."unitCaptainId" = $1 AND scout."sectorBaseName" = sector."baseName" AND scout."sectorSuffixName" = sector."suffixName";
            `,
                [unitCaptainId]
            )

            if (!result.rows.length) {
                return res.status(404).json({
                    error: 'No scouts found in this unit',
                })
            }

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    allScoutsInUnitCount: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            // Make sure that the id is provided (not undefined)
            if (!unitCaptainId) {
                return res.status(404).json({
                    error: 'Enter a valid unit captain id',
                })
            }

            const result = await db.query(
                `
                SELECT Count(*)
                FROM "Scout" AS scout, "Sector" AS sector
                WHERE sector."unitCaptainId" = $1 AND scout."sectorBaseName" = sector."baseName" AND scout."sectorSuffixName" = sector."suffixName";
            `,
                [unitCaptainId]
            )

            if (!result.rows.length) {
                return res.status(404).json({
                    error: 'No scouts found in this unit',
                })
            }

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    certainScoutInfo: async (req, res) => {
        try {
            const { scoutId } = req.params

            // Make sure that the id is provided (not undefined)
            if (!scoutId) {
                return res.status(404).json({
                    error: 'Enter a valid scout id',
                })
            }

            const result = await db.query(
                `
                SELECT *
                FROM "Scout"
                WHERE "scoutId" = $1;
            `,
                [scoutId]
            )

            if (!result.rows.length) {
                return res.status(404).json({
                    error: 'No scout found',
                })
            }

            res.status(200).json({
                message: 'Successful retrieval',
                body: result,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while retrieving data',
                body: error,
            })
        }
    },
    updateScout: async (req, res) => {
        try {
            // Destructuring the req.body to get the required info to update a scout
            const { scoutId } = req.params
            const {
                firstName,
                middleName,
                lastName,
                gender,
                sectorBaseName,
                sectorSuffixName,
                birthDate,
                enrollDate,
                schoolGrade,
                photo,
                birthCertificate,
            } = req.body

            // If no scout id is provided give an error
            if (!scoutId) {
                return res.status(400).json({
                    error: 'Please enter a valid scout id',
                })
            }

            // Update the scout data
            const result1 = await db.query(
                `
                UPDATE "Scout"
                SET "firstName" = $1, "middleName" = $2, "lastName" = $3, "gender" = $4, "sectorBaseName" = $5,
                "sectorSuffixName" = $6
                WHERE "scoutId" = $7
                RETURNING *
            `,
                [
                    firstName,
                    middleName,
                    lastName,
                    gender,
                    sectorBaseName,
                    sectorSuffixName,
                    scoutId,
                ]
            )

            // If no rows are effected respond with an error status and message
            if (result1.rowCount == 0) {
                return res.status(404).json({
                    error: 'No rows updated for the scout',
                    body: result1,
                })
            }

            // Update the scout profile data
            const result2 = await db.query(
                `
                UPDATE "ScoutProfile"
                SET "birthDate" = $1, "enrollDate" = $2, "schoolGrade" = $3, "photo" = $4,
                "birthCertificate" = $5
                WHERE "scoutId" = $6
                RETURNING *
            `,
                [
                    birthDate,
                    enrollDate,
                    schoolGrade,
                    photo,
                    birthCertificate,
                    scoutId,
                ]
            )

            // Respond with the updated data
            res.status(200).json({
                message: 'Successful update',
                body: { result1, result2 },
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while updating the scout',
                body: error,
            })
        }
    },
    insertScout: async (req, res) => {
        try {
            // Destructuring the req.body to get the required info to update a scout
            const {
                firstName,
                middleName,
                lastName,
                gender,
                sectorBaseName,
                sectorSuffixName,
                birthDate,
                enrollDate,
                schoolGrade,
                photo,
                birthCertificate,
            } = req.body

            // Insert a new scout into the database
            const result1 = await db.query(
                `
                INSERT INTO "Scout" ("firstName", "middleName", "lastName", "gender", "sectorBaseName", "sectorSuffixName")
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *;
            `,
                [
                    firstName,
                    middleName,
                    lastName,
                    gender,
                    sectorBaseName,
                    sectorSuffixName,
                ]
            )

            // If nothing was inserted return an error
            if (result1.rowCount == 0) {
                return res.status(400).json({
                    error: 'No data was inserted for the scout',
                    body: result1,
                })
            }

            // Insert the scout profile
            const result2 = await db.query(
                `
                INSERT INTO "ScoutProfile" ("birthDate", "enrollDate", "schoolGrade", "photo", "birthCertificate", "scoutId")
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *;
            `,
                [
                    birthDate,
                    enrollDate,
                    schoolGrade,
                    photo,
                    birthCertificate,
                    result1.rows[0]['scoutId'],
                ]
            )

            // If nothing was inserted return an error
            if (result2.rowCount == 0) {
                return res.status(400).json({
                    error: 'No data was inserted for the scout profile',
                    body: result2,
                })
            }

            // Return the data
            res.status(200).json({
                message: 'Successful insertion',
                body: { result1, result2 },
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'An error occured while inserting a new scout',
                body: error,
            })
        }
    },
}

export default scoutController
