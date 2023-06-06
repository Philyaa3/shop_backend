import jwt from "jsonwebtoken";
import secConfig from "../config/SecureConfig.js";

export default function (req, res, next) {
    if(req.method === "OPTIONS")
        next()
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token)
            return res.status(403).json({message: "User unauthorized"})
        const decode = jwt.verify(token, secConfig.secret)
        req.user = decode
        next()
    }catch (e) {
        return res.status(403).json({message: "User unauthorized"})
    }
}