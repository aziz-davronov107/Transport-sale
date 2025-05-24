import BranchRouter from "./branchsRouters.js";
import CourseRouter from "./coursesRouters.js";
import GroupRouter from "./groupsRouters.js";
import StudentRouter from "./students.js";
import UsersRouters from "./UsersRouters.js";



let routers = ()=>{
    return [
        {url: "Authorisation",func: UsersRouters},
        {url: "Branchs",func: BranchRouter},
        {url: "Courses",func: CourseRouter},
        {url: "Groups",func: GroupRouter},
        {url: "Students",func: StudentRouter}
    ]
};

export default routers