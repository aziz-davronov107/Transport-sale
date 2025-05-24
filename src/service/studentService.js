import studetModel from "../models/studetModel.js";

export class StudetsService{
    static async createStudet(data){
        let newstudet = await studetModel.create(data);
        return newstudet;
    }
    static async get_all(){
        let studets = await studetModel.find();
        return studets;
    }
    static async update(id,data){
        let newstudet = await studetModel.findByIdAndUpdate(id,{$set:data},{new:true});
        return newstudet;
    }
    static async delete(id){
        let oldstudet = await studetModel.findByIdAndDelete(id);
        return oldstudet;
    }
}