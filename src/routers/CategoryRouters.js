import {Router} from "express";
import {Categories} from "../controllers/category.js";
import checkToken from "../midleware/checkToken.js";
import permission from "../midleware/permission.js";



let CategoryRouter = Router();
CategoryRouter
    .post("/post",checkToken,permission,Categories.post)
    .get("/get",checkToken,permission,Categories.get)
    .put("/put/:id",checkToken,permission,Categories.update)
    .delete("/delete/:id",checkToken,permission,Categories.delete)
export default CategoryRouter