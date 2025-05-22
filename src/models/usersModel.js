import { Schema, model } from "mongoose";

let userShema = new Schema({
    name: { type: String },
    password: String,
    email: { type: String, unique: true },
    role: { type: String, default: "User" }
}, { static: true })

let userModel = model("User", userShema)

export default userModel