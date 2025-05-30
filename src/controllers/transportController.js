import { TransportService } from "../service/transportService.js";



export class TransportController {
    static async create(req, res, next) {
        try {
            let {branch_id, model, color, price, time} = req.body;
            let body = {branch_id, model, color, price, time};

            let data = await TransportService.create(body,req.files);

            res.status(201).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async get(req, res, next) {
        try {
            let data = await TransportService.get(req.query);

            res.status(200).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            let { id } = req.params
            let { branch_id, model, color, price, time } = req.body
            let body = {branch_id, model, color, price, time }
            let data = await TransportService.update(id, body);

            res.status(203).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            let { id } = req.params;
            let data = await TransportService.delete(id);
            

            res.status(202).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }
}