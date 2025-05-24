import { GroupsService } from "../service/groupServise.js";

export class GroupsController{
    static async create(req,res,next){
       try {
            let data = await GroupsService.createGroup(req.body);
            res.status(201).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async get_all(req,res,next){
       try {
            let data = await GroupsService.get_all();
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async update(req,res,next){
       try {
            let data = await GroupsService.update(req.params.id,req.body);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async delete(req,res,next){
       try {
            let data = await GroupsService.delete(req.params.id);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
}