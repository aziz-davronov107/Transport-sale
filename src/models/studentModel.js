import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  username: { type: String, required: true },
  group_id: { type: Schema.Types.ObjectId, ref: "Group", required: true },
});

const studentModel = model("Student", studentSchema);
export default studentModel;