import { CustomError } from "../CustomError/customError.js";
import courseModel from "../models/courseModel.js";
import permissionModel from "../models/permissonModule.js";
import groupModel from "../models/groupModel.js";

export default async (req, res, next) => {
    try {
        let { _id, role } = req.user;
        let url = req.baseUrl.split("/")[1]
        if (role == "SuperAdmin") return next()
        let { branch_id, course_id, group_id } = req.body;
        let vaqtincha
        if (!branch_id) {
            if (!course_id) {
                vaqtincha = await groupModel.findById(group_id);
                if (!vaqtincha) throw new CustomError("Gruh topilmadi", 404);
                course_id = vaqtincha.course_id
            }
            vaqtincha = await courseModel.findById(course_id);
            if (!vaqtincha) throw new CustomError("Kurs topilmadi", 404);
            branch_id = vaqtincha.branch_id
        }
        let query = {
            user_id: _id,
            actions: req.method,
            branch_id,
            permissionModel: url
        }

        let permission = await permissionModel.findOne(query)

        if (permission) return next()

        throw new CustomError("Permission denied!", 403);

    } catch (error) {
        next(error)
    }
}