import express from "express";
const app = express();
import cors from "cors";
import connection from "./DB/connection.js";
import * as allRoutes from "./src/modules/index.routes.js";
// middlware
app.use(express.json());
app.use(cors());
// database connection 
connection();

// create api
app. get("/", (req, res)=>{
    res.send("Express App is Running")
})
const baseURL = "/api/v1";
app.use("/images", express.static("./upload/images"));
app.use(`${baseURL}/user`, allRoutes.userRouter);
app.use(`${baseURL}/product`, allRoutes.productRouter);
app.use(`${baseURL}/auth`, allRoutes.authRouter);



const port = 3000;
app.listen(port, (error)=>{
    if(!error){
        console.log("server running on port " + port);
    }else{
        console.log("Error : " + error);
    }
})