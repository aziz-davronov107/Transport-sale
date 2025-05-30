import { CustomError } from "../CustomError/customError.js";
import adminPermissionModel from "../models/adminPermissionModel.js";
import staffModel from "../models/staffModel.js";


export class AdminPermissionService{
    static async create(data) {
        let newdata = await adminPermissionModel.create(data);
        return newdata
    }

    static async get() {
        let data = await adminPermissionModel.find();
        return data
    }

    static async update(id, data) {
        let olddata = await adminPermissionModel.findById(id);
        if (!olddata) throw new CustomError("Bunday permission mavjud emas!", 404);

        let newdata = await adminPermissionModel.findByIdAndUpdate(id, { $set: data }, { new: true });
        return newdata
    }

    static async delete(id) {
        let data = await adminPermissionModel.findByIdAndDelete(id);
        return data
    }

    static async getOne(id) {
        let is_SuperAdmin = await staffModel.findById(id)

        if (is_SuperAdmin.role == "SuperAdmin") return "'Oga siz eng zorisiz!"
        let data = await adminPermissionModel.findByIdAndDelete(id);
        return data
    }
}