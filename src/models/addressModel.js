import { Schema,model } from "mongoose";

let addressSchema = new Schema({
    name: {type: String, unique: true}
})

let addressModel = model("Addres",addressSchema);

export default addressModel