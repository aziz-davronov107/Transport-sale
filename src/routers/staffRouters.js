import {Router} from "express"
import validation from "../midleware/validation.js"
import { StaffController } from "../controllers/staffControllers.js"

let staffRouter = Router()

staffRouter
    .post("/register",validation,StaffController.register)
    .post("/login",validation,StaffController.login)

export default staffRouter