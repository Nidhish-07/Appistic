import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'

export const verifyToken = function (req, res, next) {


    const token = req.cookies.access_token

    if (!token) {
        return next(errorHandler(401, "You are not authenticated"))
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return next(errorHandler(403, "Token invalid"))
        }
        req.user = user
        next()
    })
}

export const verifyUser = function (req, res, next) {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else {

            return next(errorHandler(403, "You are not authorized to access this"))
        }
    })
}

export const verifyAdmin = function (req, res, next) {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        }
        else {

            return next(errorHandler(403, "You are not authorized to access this"))
        }
    })
}