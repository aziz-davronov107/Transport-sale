import { BranchService } from "../service/branchService.js";


export class BranchController {
    static async create(req, res, next) {
        try {
            let { name, address_id } = req.body
            let body = { name, address_id }
            console.log(body);

            let data = await BranchService.create(body);

            res.status(201).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async get(req, res, next) {
        try {
            let data = await BranchService.get();

            res.status(200).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            let { id } = req.params
            let { name, address } = req.body
            let body = { name, address }
            let data = await BranchService.update(id, body);

            res.status(203).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            let { id } = req.params;
            let data = await BranchService.delete(id);

            res.status(202).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }

    static async getOne(req, res, next) {
        try {
            let { id } = req.params;
            let data = await BranchService.getOne(id);

            res.status(200).send({ success: true, data, message: "success" })
        } catch (error) {
            next(error)
        }
    }
}