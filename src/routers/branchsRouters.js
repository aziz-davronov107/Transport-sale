import { Router } from "express";
import { BranchsController } from "../controllers/branchsController.js";
import checkToken from "../midleware/checkToken.js";
import secondCheck from "../midleware/secondCheck.js";


let BranchRouter =  Router()
BranchRouter
    .post("/create",checkToken,secondCheck,BranchsController.create)
    .get("/get_all",checkToken,secondCheck,BranchsController.get_all)
    .put("/update/:id",checkToken,secondCheck,BranchsController.update)
    .delete("/delete/:id",checkToken,secondCheck,BranchsController.delete)

export default BranchRouter