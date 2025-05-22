import { CustomError } from "../CustomError/customError.js";
import permissionModel from "../models/permissonModule.js";

export default async (req, res, next) => {
    try {
        let user = req.user;
        if(user.role == "SuperAdmin")  return next()

        let permission = await permissionModel.findOne({ user_id: user._id })

        if(permission && permission.actions.includes(req.method)) return next()
            
        throw new CustomError("Permission denied!",403);
        
    } catch (error) {
        next(error)
    }
}