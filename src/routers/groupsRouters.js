import { Router } from "express";
import { GroupsController } from "../controllers/groupController.js";
import checkToken from "../midleware/checkToken.js";
import permission from "../midleware/permission.js";


let GroupRouter = Router()
GroupRouter
    .post("/create", checkToken, permission, GroupsController.create)
    .get("/get_all", checkToken, permission, GroupsController.get_all)
    .put("/update/:id", checkToken, permission, GroupsController.update)
    .delete("/delete/:id", checkToken, permission, GroupsController.delete)

export default GroupRouter