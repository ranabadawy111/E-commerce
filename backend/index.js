import express from "express";
const app = express();
import cors from "cors";
import connection from "./DB/connection.js";

// middlware
app.use(express.json());
app.use(cors());
// database connection 
connection();

// 
app. get("/", (req, res)=>{
    res.send("Express App is Running")
})

const port = 4000;
app.listen(port, (error)=>{
    if(!error){
        console.log("server running on port " + port);
    }else{
        console.log("Error : " + error);
    }
})