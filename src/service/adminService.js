import { CustomError } from "../CustomError/customError.js";
import staffModel from "../models/staffModel.js";


export class AdminService {
    static async update(id, role) {
        let staff = await staffModel.findById(id);
        if (!staff) throw new CustomError("Staff Not Found!");

        return await staffModel.findByIdAndUpdate(id, { role }, { new: true });
    }
    static async get() {
        return await staffModel.find({ role: "Admin" });
    }
    static async getOne(id) {
        return  await staffModel.findById(id).select('-password')
    }
    static async delete(id) {
        let staff = await staffModel.findById(id);
        if (!staff) throw new CustomError("Staff Not Found!");

        return await staffModel.findByIdAndDelete(id)
    }
}