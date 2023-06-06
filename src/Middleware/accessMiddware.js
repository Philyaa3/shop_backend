import jwt from "jsonwebtoken";
import secConfig from "../config/SecureConfig.js";

export default function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS")
            next()
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token)
                return res.status(401).json({message: "User unauthorized"})
            const {roles: userRoles} = jwt.verify(token, secConfig.secret)
            let hasRole = false
            userRoles.forEach(role => roles.includes(role) ? hasRole = true : null)
            if(!hasRole)
                return res.status(403).json({message: "Forbidden"})
            next()
        } catch (e) {
            return res.status(401).json({message: "User unauthorized"})
        }
    }
}