import { Schema, model } from "mongoose";

let userShema = new Schema({
    surname: { type: String},
    lastname: { type: String},
    email: { type: String,unique: true },
    password: { type: String},
    r_password: { type: String},
    img: { type: String },
    birthDate: { type: Date },
    role: { type: String, enum: ["SuperAdmin", "Admin", "User"], default: "SuperAdmin" },
}, { strict: true })

let userModel = model("User", userShema)

export default userModel