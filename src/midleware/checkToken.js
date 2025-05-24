import JWT from "../utils/jwt.js"
import { CustomError } from "../CustomError/customError.js";
import userModel from "../models/usersModel.js";

export default async (req, res, next) => {
    try {
        let { token } = req.headers
        if (!token) throw new CustomError("Token is required", 404);
        let { userIp, userAgent, user_id } = JWT.verif(token)


        if (userIp != req.ip || userAgent != req.headers['user-agent']) throw new CustomError("Sizga ruxsat yoq!", 403);

        let user = await userModel.findById(user_id)
        if (!user) {
            throw new CustomError("User not found", 404);
        }
        req.user = user
        next()
    } catch (error) {
        if (error.name == "TokenExpiredError") {
            return next(new CustomError("Token expire!", 404))

        }
        if (error.name == "JsonWebTokenError") {
            return next(new CustomError("Invalid Token!", 400))
        }
        next(error)
    }
}
