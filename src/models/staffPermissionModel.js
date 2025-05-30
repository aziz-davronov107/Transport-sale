import { Schema, Types, model } from "mongoose";

let staffPermissionSchema = new Schema({
    staff_id: { "type": Schema.Types.ObjectId, ref: ("Staff") },
    model: String,
    actions: { "type": [String], enum: ["POST","GET","PUT","DELETE"] }

}, { timestamps: true, strict: true })

let staffPermissionModel = model("StaffPermission", staffPermissionSchema);

export default staffPermissionModel