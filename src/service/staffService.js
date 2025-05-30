import { CustomError } from "../CustomError/customError.js";
import staffModel from "../models/staffModel.js";
import JWT from "../utils/jwt.js";
import bcrypt from "bcrypt";

export class StaffService {
    static async getCheckToken(payload) {
        return {
            accessToken: JWT.sign(payload),
            refreshToken: JWT.signRF(payload)
        }
    }

    static async register(data, payload) {
        let user = await staffModel.findOne({ username: data.username })
        if (user) throw new CustomError("Bunday staff mavjud!");

        data.password = await bcrypt.hash(data.password,10)
        let newUser = await staffModel.create(data);
        payload.userId = newUser._id

        return await this.getCheckToken(newUser);
    }

    static async login(data,payload) {
        let user = await staffModel.findOne({ username: data.username })
        if (!user) throw new CustomError("username yoki password Xato", 404);

        let check = await bcrypt.compare(data.password,user.password)
        if (!check) throw new CustomError("username yoki password Xato", 404);

        payload.userId = user._id
        return await this.getCheckToken(payload);
    }
}