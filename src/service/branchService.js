import branchModel from "../models/branchModel.js";

export class BranchsService{
    static async createBranch(data){
        let newBranch = await branchModel.create(data);
        return newBranch;
    }
    static async get_all(){
        let Branchs = await branchModel.find();
        return Branchs;
    }
    static async update(id,data){
        let newBranch = await branchModel.findByIdAndUpdate(id,{$set:data},{new:true});
        return newBranch;
    }
    static async delete(id){
        let oldBranch = await branchModel.findByIdAndDelete(id);
        return oldBranch;
    }
}