import studentModel from "../models/studentModel.js";

export class StudentsService{
    static async createStudent(data){
        let newstudet = await studentModel.create(data);
        return newstudet;
    }
    static async get_all(){
        let studets = await studentModel.find();
        return studets;
    }
    static async update(id,data){
        let newstudet = await studentModel.findByIdAndUpdate(id,{$set:data},{new:true});
        return newstudet;
    }
    static async delete(id){
        let oldstudet = await studentModel.findByIdAndDelete(id);
        return oldstudet;
    }
}