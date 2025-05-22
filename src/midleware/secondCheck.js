import { CustomError } from "../CustomError/customError.js";

export default async (req, res, next) => {
    try {
        let user = req.user;
        if (user.role.toLowerCase() == "superadmin" || user.role.toLowerCase() == "admin"){
            next();
        }
        throw new CustomError("Permission denied!",403);
        
    } catch (error) {
        next(error)
    }
}