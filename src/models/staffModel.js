import { Schema, model } from "mongoose";

let staffSchema = new Schema({
    username: { "type": String, unique: true },
    password: { "type": String },
    birth_date: { "type": Date },
    role: {"type": String,default:"User"},
    branch_id: {"type": Schema.Types.ObjectId,ref: "Branch"}

}, { timestamps: true ,strict:true})

let staffModel = model("Staff",staffSchema);

export default staffModel