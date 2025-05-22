import CategoryRouter from "./CategoryRouters.js";
import UsersRouters from "./UsersRouters.js";

let routers = ()=>{
    return [
        {url: "Authorisation",func: UsersRouters},
        {url: "Categories",func: CategoryRouter},
    ]
};

export default routers