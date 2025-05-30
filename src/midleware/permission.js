import { CustomError } from "../CustomError/customError.js";
import adminPermissionModel from "../models/adminPermissionModel.js";
import staffPermissionModel from "../models/staffPermissionModel.js";


export default async (req, res, next) => {
    try {
        let { _id, role, } = req.staff;

        let url = req.baseUrl.split("/")[2]
        const models = {
            Admin: adminPermissionModel,
            User: staffPermissionModel,
        };

        if (req.path == "/ownPermissions") {
            if ((role === "User" && url === "StaffPermission") || (role === "Admin" && url === "AdminPermission")) {
                let permission = await models[role].findOne({ staff_id: _id })
                if (!permission) throw new CustomError("Sizda ruxsat yoq!", 404)
                return next()
            }
        }


        if (role == "SuperAdmin" || (role == "Admin" && url == "Transport")) return next()

        if ((role == "User" && url == "Transport") || role == "Admin") {
            let permission = await models[role].findOne({ staff_id: _id, model: url, actions: req.method })
            if (!permission) throw new CustomError("Sizda ruxsat yoq!", 404)
            return next();
        }

        throw new CustomError("Permission denied!", 403);

    } catch (error) {
        next(error)
    }
}