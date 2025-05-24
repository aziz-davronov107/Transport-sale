import { Schema,model} from "mongoose";



let groupSchema = new Schema({
    name: {type: String,required:true},
    course_id: {type: Schema.Types.ObjectId,ref:"Course",required:true}

})

const groupModel = model("Group", groupSchema);
export default groupModel;