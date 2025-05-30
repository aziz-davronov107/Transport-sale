import { StaffService } from "../service/staffService.js"


export class StaffController {
    static async register(req, res, next) {
        try {
            let payload = { ip: req.ip, userAgent: req.headers['user-agent'] }
            let data = await StaffService.register(req.body, payload)
            res.status(201).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next) {
        try {
            let payload = { ip: req.ip, userAgent: req.headers['user-agent'] }
            let data = await StaffService.login(req.body, payload)
            res.status(200).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }
}