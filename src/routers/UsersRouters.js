import {Router} from "express";
import {Users} from "../controllers/userContollers.js";
import validation from "../midleware/validation.js";
import checkToken from "../midleware/checkToken.js";
import secondCheck from "../midleware/secondCheck.js";



let UsersRouter = Router();
UsersRouter
    .post("/register",validation,Users.register)
    .post("/login",validation,Users.login)
    .get("/getUsers",Users.getUsers)
    .put("/addAdmin:id",checkToken,secondCheck,Users.is_Admin)
    .post("permission",checkToken,secondCheck,Users.is_permisson)
export default UsersRouter