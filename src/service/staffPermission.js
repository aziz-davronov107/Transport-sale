import { CustomError } from "../CustomError/customError.js";
import staffModel from "../models/staffModel.js";
import staffPermissionModel from "../models/staffPermissionModel.js";

export class StaffPermissionService {
    static async create(data) {
        let newdata = await staffPermissionModel.create(data);
        return newdata
    }

    static async get() {
        let data = await staffPermissionModel.find();
        return data
    }

    static async update(id, data) {
        let olddata = await staffPermissionModel.findById(id);
        if (!olddata) throw new CustomError("Bunday permission mavjud emas!", 404);

        let newdata = await staffPermissionModel.findByIdAndUpdate(id, { $set: data }, { new: true });
        return newdata
    }

    static async delete(id) {
        let data = await staffPermissionModel.findByIdAndDelete(id);
        return data
    }

    static async getOne(id) {
        let is_SuperAdmin = await staffModel.findById(id)

        if (is_SuperAdmin.role == "SuperAdmin") return "'Oga siz eng zorisiz!"
        let data = await staffPermissionModel.findByIdAndDelete(id);
        return data
    }
}
