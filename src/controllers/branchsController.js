import { BranchsService } from "../service/branchService.js";

export class BranchsController{
    static async create(req,res,next){
       try {
            let data = await BranchsService.createBranch(req.body);
            res.status(201).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async get_all(req,res,next){
       try {
            let data = await BranchsService.get_all();
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async update(req,res,next){
       try {
            let data = await BranchsService.update(req.params.id,req.body);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async delete(req,res,next){
       try {
            let data = await BranchsService.delete(req.params.id);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
}