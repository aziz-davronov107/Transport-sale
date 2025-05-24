import userModel from "../models/usersModel.js";
import bcrypt from "bcrypt";
import { CustomError } from "../CustomError/customError.js";
import JWT from "../utils/jwt.js";
import permissionModel from "../models/permissonModule.js";
import path from "path"

export class UsersService {
  constructor() { }

  static async resultToken(malumot) {
    return {
      accessToken: JWT.sign(malumot),
      refreshToken: JWT.signRF(malumot)
    }
  }
  static async register_User(data, payload, files) {
    try {
      const user = await userModel.findOne({ email: data.email })

      if (user) {
        throw new CustomError("Bunday foydalanuvchi bazada mavjud !", 400)
      }

      let { img } = files
      let filename = new Date().getTime() + "." + img.name
      let uploadPath = path.join(process.cwd(), "src", "uploads", filename);

      img.mv(uploadPath, (error) => {
        if (error) throw new CustomError(error.message, 400)
      })

      let hash_pass = await bcrypt.hash(data.password, 10);
      data.password = hash_pass
      data.img = filename


      let newUser = await userModel.create(data)
      payload._id = newUser._id

      return await this.resultToken(payload)
    } catch (error) {
      throw error;
    }
  }
  static async login_User(data, payload) {
    try {
      const user = await userModel.findOne({ email: data.email });

      if (!user) throw new CustomError("email yoki password Xato", 404);

      const check = await bcrypt.compare(data.password, user.password);
      if (!check) throw new CustomError("email yoki password Xato", 404);

      payload._id = user._id
      return await this.resultToken(payload)
    } catch (error) {
      throw error;
    }
  }
  static async Users() {
    try {
      const users = await userModel.find();
      return users
    } catch (error) {
      throw error;
    }
  }
  static async addAdmin(id, role) {
    const newAdmin = await userModel.findByIdAndUpdate(id, { role }, { new: true });
    return newAdmin
  }
  static async permisson(data) {
    const permission = await permissionModel.create(data)
    return permission
  }
}