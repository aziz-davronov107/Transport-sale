import { Schema,model } from "mongoose";


let transportSchema = new Schema({
    branch_id: {type: Schema.Types.ObjectId,ref: "Branch"}, 
    model: String, 
    color: String, 
    img: String, 
    price: Number
},{timestamps: true,strict: true})

let transportModel = model("Transport",transportSchema);

export default transportModel;