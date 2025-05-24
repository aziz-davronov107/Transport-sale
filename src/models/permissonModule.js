import { model,Schema} from "mongoose";


let permissionSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref:"User",required:true},
    actions: {type: [String],enum: ["GET","POST","PUT","DELETE"],required: true},
    branch_id: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
    permissionModel: { type: String, enum: ["Student","Groups","Courses"], required: true },
})

let permissionModel = model("Permisson",permissionSchema)

export default permissionModel