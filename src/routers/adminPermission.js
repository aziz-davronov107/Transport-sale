import {Router} from "express"
import { AdminPermission } from "../controllers/adminPermission.js"
import checkToken from "../midleware/checkToken.js"
import permission from "../midleware/permission.js"

let adminPemissionRouter = Router()

adminPemissionRouter
    .post("/addPermission",checkToken,permission,AdminPermission.create)
    .get("/allPermissions",checkToken,permission,AdminPermission.get)
    .put("/changePermission/:id",checkToken,permission,AdminPermission.update)
    .delete("/deletePermission:id",checkToken,permission,AdminPermission.delete)
    .get("/ownPermissions",checkToken,permission,AdminPermission.getOne)

export default adminPemissionRouter