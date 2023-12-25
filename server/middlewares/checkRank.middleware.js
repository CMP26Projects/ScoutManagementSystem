
const checkRankMiddleware = (rank) => {
    return async (req, res, next) => {
        const captainRank = req.captain.type
        if (captainRank === rank) {
            next()
        } else {
            res.status(403).json({ message: 'Forbidden' })
        }
    }
}

export default checkRankMiddleware
