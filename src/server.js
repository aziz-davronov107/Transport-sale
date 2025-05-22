import express from "express"
import { connectDB } from "./config/db.js";
import  routers  from "./routers/index.js";
import "dotenv/config";
import { errorMiddleware } from "./midleware/midleware.js";


let port = process.env.PORT || "1170"
let app = express();

app.use(express.json());

await connectDB();

routers().forEach(({ url, func}) => {
    app.use("/api/"+url,func);
});

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log("Server is run... dsada  ".padStart(26,"0"));
})


