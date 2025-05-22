import categoryModel from "../models/categoryModel.js";

export class CategoryService {

    static async create(data) {
        try {
            const category = await categoryModel.create(data);
            return category
        } catch (error) {
            throw error
        }
    }
    static async getAll(data) {
        try {
            const categorys = await categoryModel.find();
            return categorys
        } catch (error) {
            throw error
        }
    }
    static async update(id, data) {
        try {
            const Newcategory = await categoryModel.findByIdAndUpdate(id, data, { new: true })
            return Newcategory
        } catch (error) {
            throw error
        }
    }
    static async delete(id) {
        try {
            const oldCategory = await categoryModel.findByIdAndDelete(id);
            return oldCategory
        } catch (error) {
            throw error
        }
    }
}