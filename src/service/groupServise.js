import groupModel from "../models/groupModel.js";

export class GroupsService{
    static async createGroup(data){
        let newgroup = await groupModel.create(data);
        return newgroup;
    }
    static async get_all(){
        let groups = await groupModel.find();
        return groups;
    }
    static async update(id,data){
        let newgroup = await groupModel.findByIdAndUpdate(id,{$set:data},{new:true});
        return newgroup;
    }
    static async delete(id){
        let oldgroup = await groupModel.findByIdAndDelete(id);
        return oldgroup;
    }
}