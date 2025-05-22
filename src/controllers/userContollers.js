import { UsersService } from "../service/users.service.js";


export class Users {
    static async register(req,res,next){
        try {
            let payload = {}
            payload.ip = req.ip
            payload.headers = req.headers["user-agent"]
            let data = await UsersService.register_User(req.body,payload);
            res.status(201).send({success: true,data,message: "success"})
        } catch (error) {
            console.error("Error in register:", error.name); 
            next(error)
        }
    }
    static async login(req,res,next){
        try {
             let payload = {}
            payload.ip = req.ip
            payload.headers = req.headers["user-agent"]
            let data = await UsersService.login_User(req.body,payload);
            res.status(200).send({success: true,data,message: "success"})
        } catch (error) {
            console.error("Error in login: ", error); 
            next(error)
        }
    }
    static async is_permisson(req,res,next){
        try {
            let data = await UsersService.permisson(req.body);
            res.status(201).send({success: true,data,message: "success"})
        } catch (error) {
            console.error("Error in permission:", error.name); 
            next(error)
        }
    }
}

