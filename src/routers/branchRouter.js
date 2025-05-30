import { Router } from "express"
import validation from "../midleware/validation.js"
import { BranchController } from "../controllers/branchController.js"
import checkToken from "../midleware/checkToken.js"
import permission from "../midleware/permission.js"

let branchRouter = Router()

branchRouter
    .post("/addBranch", validation,checkToken,permission, BranchController.create)
    .get("/branches",checkToken,permission, BranchController.get)
    .put("/changeBranch/:id",checkToken,permission, validation, BranchController.update)
    .delete("/deleteBranch/:id",checkToken,permission, BranchController.delete)
    .get("/branch/allInfo/:id",checkToken,permission, BranchController.getOne)

export default branchRouter