import mongoose from "mongoose";
import { CustomError } from "../CustomError/customError.js";
import branchModel from "../models/branchModel.js";
import staffModel from "../models/staffModel.js";
import transportModel from "../models/transportModel.js";




export class BranchService {
    static async toObject(id) {
        return new mongoose.Types.ObjectId(id)
    }

    static async create(data) {
        let branch = await branchModel.findOne({ name: data.name });
        if (branch) throw new CustomError("Bunday Branch Mavjud")
        return await branchModel.create(data)
    }

    static async get() {
        return await branchModel.find()
    }

    static async update(id, data) {
        id = await this.toObject(id)
        let branch = await branchModel.findById(id);
        if (!branch) throw new CustomError("Bunday Branch mavjud emas!", 404)

        return await branchModel.findByIdAndUpdate(id, { $set: data }, { new: true });
    }

    static async delete(id) {
        id = await this.toObject(id)
        let branch = await branchModel.findById(id);
        if (!branch) throw new CustomError("Bunday Branch mavjud emas!", 404)
        return await branchModel.findByIdAndDelete(id)
    }

    static async getOne(id) {
        id = await this.toObject(id)
        let branch = await branchModel.findById(id);
        if (!branch) throw new CustomError("Bunday Branch mavjud emas!", 404);

        branch = branch.toObject()

        let staffs = await staffModel.find({ branch_id: id, role: { $ne: "superAdmin" } });
        let transport = await transportModel.find({ branch_id: id }).select('-password');


        branch.staffs = staffs;
        branch.transport = transport;
        return branch
    }
}