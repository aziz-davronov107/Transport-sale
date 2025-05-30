import express from "express"
import { connectDB } from "./config/db.js";
import routers from "./routers/index.js";
import "dotenv/config";
import { errorMiddleware } from "./midleware/midleware.js";
import fileUpload from "express-fileupload";
import addressModel from "./models/addressModel.js";

let port = process.env.PORT || "1170"
let app = express();

app.use(express.json());

await connectDB();
app.use(fileUpload())
// app.post("/", async (req, res) => {
//     const viloyatlar = [
//         "Toshkent",
//         "Andijon",
//         "Namangan",
//         "Fargʻona",
//         "Samarqand",
//         "Buxoro",
//         "Navoiy",
//         "Xorazm",
//         "Surxondaryo",
//         "Qashqadaryo",
//         "Jizzax",
//         "Sirdaryo",
//         "Qoraqalpogʻiston"
//     ];

//     for (let i = 0; i < viloyatlar.length; i++) {
//         await addressModel.create({name: viloyatlar[i]});
//     }
//     return
// })

routers().forEach(({ url, func }) => {
    app.use("/api/" + url, func);
});

app.use(errorMiddleware);

app.listen(port, () => {
    console.log("Server is run... dsada  ");
})


