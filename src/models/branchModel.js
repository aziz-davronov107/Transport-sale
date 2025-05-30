import { Schema,model } from "mongoose";

let branchSchema = new Schema({
    name: {type: String, unique: true},
    address_id: {type: Schema.Types.ObjectId, ref: "Addres"}
},{timestamps: true,strict: true})

let branchModel = model("Branch",branchSchema);

export default branchModel