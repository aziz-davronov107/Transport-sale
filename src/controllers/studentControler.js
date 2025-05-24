import { StudentsService } from "../service/studentService.js";

export class StudentsController{
    static async create(req,res,next){
       try {
            let data = await StudentsService.createStudent(req.body);
            res.status(201).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async get_all(req,res,next){
       try {
            let data = await StudentsService.get_all();
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async update(req,res,next){
       try {
            let data = await StudentsService.update(req.params.id,req.body);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async delete(req,res,next){
       try {
            let data = await StudentsService.delete(req.params.id);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
}