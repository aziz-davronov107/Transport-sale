
import { CoursesService } from "../service/courseService.js";

export class CoursesController{
    static async create(req,res,next){
       try {
            let data = await CoursesService.createCourse(req.body);
            res.status(201).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async get_all(req,res,next){
       try {
            let data = await CoursesService.get_all();
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async update(req,res,next){
       try {
            let data = await CoursesService.update(req.params.id,req.body);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
    static async delete(req,res,next){
       try {
            let data = await CoursesService.delete(req.params.id);
            res.status(200).send({success : true, data, message:"success"})
       } catch (error) {
            next(error)
       }
    }
}