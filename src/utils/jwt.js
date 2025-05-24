import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY
const expiresInAC = process.env.ACCESS_TIME
const expiresInRF = process.env.REFRESH_TIME

export default {
    sign: payload => jwt.sign({ user_id: payload._id, userIp: payload.ip, userAgent: payload.userAgent }, secretKey, { expiresIn: expiresInAC }),
    signRF: payload => jwt.sign({ user_id: payload._id, userIp: payload.ip, userAgent: payload.userAgent }, secretKey, { expiresIn: expiresInRF }),
    verif: token => jwt.verify(token, secretKey)
}