import { AdminService } from "../service/adminService.js";


export class AdminController{
    static async update(req, res, next) {
            try {
                let {id} = req.params
                let {role} = req.body;
                let data = await AdminService.update(id,role);
    
                res.status(201).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async get(req, res, next) {
            try {
                let data = await AdminService.get();
    
                res.status(200).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async getOne(req, res, next) {
            try {
                let data = await AdminService.getOne(req.params.id);
    
                res.status(203).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async delete(req, res, next) {
            try {
                let { id } = req.params;
                let data = await AdminService.delete(id);
    
                res.status(202).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
}

