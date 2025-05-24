import { Router } from "express";
import { StudentsController } from "../controllers/studentControler.js";
import checkToken from "../midleware/checkToken.js";
import permission from "../midleware/permission.js";


let StudentRouter = Router()
StudentRouter
    .post("/create", checkToken, permission, StudentsController.create)
    .get("/get_all", checkToken, permission, StudentsController.get_all)
    .put("/update/:id", checkToken, permission, StudentsController.update)
    .delete("/delete/:id", checkToken, permission, StudentsController.delete)

export default StudentRouter