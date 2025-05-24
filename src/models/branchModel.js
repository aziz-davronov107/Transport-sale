import { Schema, model } from "mongoose";

const branchSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
},{statics:true});

const branchModel = model("Branch", branchSchema);
export default branchModel;