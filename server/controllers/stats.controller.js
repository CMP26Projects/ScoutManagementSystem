import db from '../database/db.js'
import computeAbsenceRate from '../utils/computeAbsenceRate.js'

const statsController = {
    // @desc    Get absence rate for all scouts
    // @route   GET /api/stats/scout
    // @access  Private
    getAllScoutsAbsenceRate: async (req, res) => {
        try {
            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }

            const result = await db.query(
                `CALL "getAllScoutsAbsenceRate"($1, $2, $3, $4);`,
                [
                    req.currentWeek.termNumber,
                    req.currentWeek.weekNumber,
                    null,
                    null,
                ]
            )

            const absenceRate = computeAbsenceRate(result.rows[0])
            if (absenceRate == null) {
                return res.status(400).json({
                    error: 'There are no attendance records',
                })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: absenceRate,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    // @desc    Get absence rate for scouts in a unit
    // @route   GET /api/stats/scout/unit/:unitCaptainId
    // @access  Private
    getScoutsInUnitAbsenceRate: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }

            const result = await db.query(
                `CALL "getScoutsInUnitAbsenceRate"($1, $2, $3, $4, $5);`,
                [
                    req.currentWeek.termNumber,
                    req.currentWeek.weekNumber,
                    Number(unitCaptainId),
                    null,
                    null,
                ]
            )

            const absenceRate = computeAbsenceRate(result.rows[0])
            if (absenceRate == null) {
                return res.status(400).json({
                    error: 'There are no attendance records for this unit',
                })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: absenceRate,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    // @desc    Get absence rate for scouts in a sector
    // @route   GET /api/stats/scout/:sectorBaseName/:sectorSuffixName
    // @access  Private
    getScoutsInSectorAbsenceRate: async (req, res) => {
        try {
            const { sectorBaseName, sectorSuffixName } = req.query

            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }

            const result = await db.query(
                `CALL "getScoutsInSectorAbsenceRate"($1, $2, $3, $4, $5, $6);`,
                [
                    req.currentWeek.termNumber,
                    req.currentWeek.weekNumber,
                    sectorBaseName,
                    sectorSuffixName,
                    null,
                    null,
                ]
            )
            const absenceRate = computeAbsenceRate(result.rows[0])
            if (absenceRate == null) {
                return res.status(400).json({
                    error: 'There are no attendance records for this sector',
                })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: absenceRate,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    //////////////////////////////////////////
    getAllScoutsAbsenceRateGraph: async (req, res) => {
        try {
            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }
            let result
            let ans = []

            for (let i = 1; i <= req.currentWeek.weekNumber; i++) {
                result = await db.query(
                    `CALL "getAllScoutsAbsenceRate"($1, $2, $3, $4);`,
                    [
                        req.currentWeek.termNumber,
                        i,
                        null,
                        null,
                    ]
                )
                const absenceRate = computeAbsenceRate(result.rows[0])
                ans.push({ weekNumber: i, absenceRate: absenceRate })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: ans,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    getScoutsInUnitAbsenceRateGraph: async (req, res) => {
        try {
            const { unitCaptainId } = req.params

            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }

            let result
            let ans = []

            for (let i = 1; i <= req.currentWeek.weekNumber; i++) {
                result = await db.query(
                    `CALL "getScoutsInUnitAbsenceRate"($1, $2, $3, $4, $5);`,
                    [
                        req.currentWeek.termNumber,
                        i,
                        Number(unitCaptainId),
                        null,
                        null,
                    ]
                )
                const absenceRate = computeAbsenceRate(result.rows[0])
                ans.push({ weekNumber: i, absenceRate: absenceRate })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: ans,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    getScoutsInSectorAbsenceRateGraph: async (req, res) => {
        try {
            const { sectorBaseName, sectorSuffixName } = req.query

            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }

            let result
            let ans = []

            for (let i = 1; i <= req.currentWeek.weekNumber; i++) {
                result = await db.query(
                    `CALL "getScoutsInSectorAbsenceRate"($1, $2, $3, $4, $5, $6);`,
                    [
                        req.currentWeek.termNumber,
                        i,
                        sectorBaseName,
                        sectorSuffixName,
                        null,
                        null,
                    ]
                )
                const absenceRate = computeAbsenceRate(result.rows[0])
                ans.push({ weekNumber: i, absenceRate: absenceRate })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: ans,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },

    // @desc    Get absence rate for a scout
    // @route   GET /api/stats/scout/:id
    // @access  Private
    getScoutAbsenceRate: async (req, res) => {
        try {
            const { scoutId } = req.params

            if (req.currentWeek.termNumber === 0) {
                return res.status(400).json({
                    error: 'Cannot get absence rate before the term starts',
                })
            }

            const result = await db.query(
                `CALL "getScoutAbsenceRate"($1, $2, $3, $4, $5);`,
                [
                    req.currentWeek.termNumber,
                    req.currentWeek.weekNumber,
                    scoutId,
                    null,
                    null,
                ]
            )

            const absenceRate = computeAbsenceRate(result.rows[0])
            if (absenceRate == null) {
                return res.status(400).json({
                    error: 'There are no attendance records for this scout',
                })
            }

            return res.status(200).json({
                message: 'Get absence rate successfully',
                body: absenceRate,
            })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ error: 'An error occurred while getting absence rate' })
        }
    },
}

export default statsController
