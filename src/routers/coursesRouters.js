import { Router } from "express";
import { CoursesController } from "../controllers/courseController.js";
import checkToken from "../midleware/checkToken.js";
import permission from "../midleware/permission.js";


let CourseRouter =  Router()
CourseRouter
    .post("/create",checkToken,permission,CoursesController.create)
    .get("/get_all",checkToken,permission,CoursesController.get_all)
    .put("/update/:id",checkToken,permission,CoursesController.update)
    .delete("/delete/:id",checkToken,permission,CoursesController.delete)

export default CourseRouter