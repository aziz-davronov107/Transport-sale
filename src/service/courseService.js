import courseModel from "../models/courseModel.js";

export class CoursesService{
    static async createCourse(data){
        let newCourse = await courseModel.create(data);
        return newCourse;
    }
    static async get_all(){
        let Courses = await courseModel.find();
        return Courses;
    }
    static async update(id,data){
        let newCourse = await courseModel.findByIdAndUpdate(id,{$set:data},{new:true});
        return newCourse;
    }
    static async delete(id){
        let oldCourse = await courseModel.findByIdAndDelete(id);
        return oldCourse;
    }
}