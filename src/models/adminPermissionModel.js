import { Schema, model } from "mongoose";

const adminPermissionSchema = new Schema({
  staff_id: { type: Schema.Types.ObjectId, ref: "Staff" },
  model: String,
  actions: [String]
}, { timestamps: true, strict: true });

const adminPermissionModel = model("AdminPermission", adminPermissionSchema);

export default adminPermissionModel;