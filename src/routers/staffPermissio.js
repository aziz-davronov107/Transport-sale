import {Router} from "express"
import { StaffPermission } from "../controllers/staffPermission.js"
import checkToken from "../midleware/checkToken.js"
import permission from "../midleware/permission.js"

let staffPemissionRouter = Router()

staffPemissionRouter
    .post("/addPermission",checkToken,permission,StaffPermission.create)
    .get("/allPermissions",checkToken,permission,StaffPermission.get)
    .put("/changePermission/:id",checkToken,permission,StaffPermission.update)
    .delete("/deletePermission:id",checkToken,permission,StaffPermission.delete)
    .get("/ownPermissions",checkToken,permission,StaffPermission.getOne)

export default staffPemissionRouter