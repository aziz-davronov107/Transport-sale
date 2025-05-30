import adminPemissionRouter from "./adminPermission.js";
import adminRouter from "./adminRouter.js";
import branchRouter from "./branchRouter.js";
import staffPemissionRouter from "./staffPermissio.js";
import staffRouter from "./staffRouters.js";
import transportRouter from "./transport.js";




let routers = () => {
    return [
        { url: "Staff", func: staffRouter },
        { url: "Branch", func: branchRouter },
        { url: "Transport", func: transportRouter },
        { url: "Admin", func: adminRouter },
        { url: "StaffPermission", func: staffPemissionRouter },
        { url: "AdminPermission", func: adminPemissionRouter }
    ]
};

export default routers
