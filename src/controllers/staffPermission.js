import { StaffPermissionService } from "../service/staffPermission.js";

export class StaffPermission {
    static async create(req, res, next) {
            try {
                let body = req.body
                let data = await StaffPermissionService.create(body);
    
                res.status(201).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async get(req, res, next) {
            try {
                let data = await StaffPermissionService.get();
    
                res.status(200).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async update(req, res, next) {
            try {
                let { id } = req.params;
                let body = req.body;
                let data = await StaffPermissionService.update(id, body);
    
                res.status(203).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async delete(req, res, next) {
            try {
                let { id } = req.params;
                let data = await StaffPermissionService.delete(id);
    
                res.status(202).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
    
    static async getOne(req, res, next) {
            try {
                let { _id } = req.staff;
                let data = await StaffPermissionService.getOne(_id);
    
                res.status(200).send({ success: true, data, message: "success" })
            } catch (error) {
                next(error)
            }
        }
}