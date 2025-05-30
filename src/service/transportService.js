import { isValidObjectId } from "mongoose";
import { CustomError } from "../CustomError/customError.js";
import transportModel from "../models/transportModel.js";
import path from "path"
import fs from "fs"


// function checkId(id){
//     if(!isValidObjectId(id)){

//     }

// }

export class TransportService {
    static async create(data, files) {
        let { img } = files
        let filename = new Date().getTime() + "." + img.name;
        let filepath = path.join(process.cwd(), "src/uploads", filename);
        img.mv(filepath, (error) => {
            if (error) throw new CustomError("Rasim yuklashda xato", 403);
        });

        data.img = filename
        return await transportModel.create(data)
    }

    static async get(data) {

        return await transportModel.find(data)
    }

    static async update(id, data) {
        let transport = await transportModel.findById(id);
        if (!transport) throw new CustomError("Bunday Transport mavjud emas!", 404)

        return await transportModel.findByIdAndUpdate(id, { $set: data }, { new: true });
    }

    static async delete(id) {
        let transport = await transportModel.findById(id);
        if (!transport) throw new CustomError("Bunday Transport mavjud emas!", 404)
        let filepath = path.join(process.cwd(), "src/uploads", transport.img);
        
        fs.unlink(filepath, (err) => {
            if (err) {
                
                throw new CustomError("Fayil mavjud emas",404);
            }

        });
        
        return await transportModel.findByIdAndDelete(id)
    }
}