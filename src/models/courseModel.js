import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: true },
  branch_id: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
},{statics : true});

const courseModel = model("Course", courseSchema);
export default courseModel;