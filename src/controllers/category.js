import { CategoryService } from "../service/category.js";


export class Categories {
   static async post(req,res){
        try {
            const result = await CategoryService.create(req.body);
            res.status(201).json({ success: true, data: result });
        } catch (error) {
            next(error);
        }
   }
   static async get(req,res,next){
        try {
            let data = await CategoryService.getAll();
            res.status(201).send({success: true,data,message: "success"})
        } catch (error) {
            next(error)
        }
    }
    static async update(req,res,next){
        try {
            let { id } = req.params
            let data = await CategoryService.update(id,req.body);
            res.status(201).send({success: true,data,message: "success"})
        } catch (error) {
            next(error)
        }
    }
    static async delete(req,res,next){
            try {
                let { id } = req.params
                let data = await CategoryService.update(id);
                res.status(201).send({success: true,data,message: "success"})
            } catch (error) {
                next(error)
            }
    }
}

