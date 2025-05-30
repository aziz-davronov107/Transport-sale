import { Router } from "express"
import validation from "../midleware/validation.js"
import { TransportController } from "../controllers/transportController.js"
import checkToken from "../midleware/checkToken.js"
import permission from "../midleware/permission.js"

let transportRouter = Router()

transportRouter
    .post("/addTransport", validation,checkToken,permission, TransportController.create)
    .get("/transports",checkToken,permission, TransportController.get)
    .put("/changeTransport/:id", validation,checkToken,permission, TransportController.update)
    .delete("/deleteTransport/:id",checkToken,permission, TransportController.delete)

export default transportRouter