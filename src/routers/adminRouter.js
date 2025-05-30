import { Router } from "express"
import { AdminController } from "../controllers/adminController.js"
import checkToken from "../midleware/checkToken.js"
import permission from "../midleware/permission.js"

let adminRouter = Router()

adminRouter
    .put("/addAdmin/:id",checkToken,permission, AdminController.update)
    .get("/admines",checkToken,permission, AdminController.get)
    .get("/admin/info/:id",checkToken,permission, AdminController.getOne)
    .delete("/deleteAdmin/:id",checkToken,permission, AdminController.delete)

export default adminRouter