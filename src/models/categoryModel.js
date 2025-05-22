import { model,Schema} from "mongoose";


let categorySchema = new Schema({
    name: {type:String,require:true,unique:true}
})

let categoryModel = model("category",categorySchema);

export default categoryModel