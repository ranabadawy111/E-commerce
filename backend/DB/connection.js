import mongoose from "mongoose";


const connection = async ()=>{
    return await mongoose.connect("mongodb://localhost:27017/Ecommerce")
    .then(()=>{
        console.log("database connected");
    }).catch(()=>{
        console.log("database error");
    });  
}
export default connection;