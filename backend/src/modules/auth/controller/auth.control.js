import userModel from "../../../../DB/models/user.model.js";
import jwt from "jsonwebtoken";

const signup = async (req, res)=>{
    // res.json({message: "done"})
    let {username, email, password, cartData} = req.body;
    let check = await userModel.findOne({email});
    if(check){
        // res.json({message: "you already register"});
        return res.status(400).json({success: false, errors: "existing user found with the same email address"});   
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new userModel({username, email, password, cartData:cart});
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, "secret_ecom");
    res.json({success: true, token});
}

const login = async(req, res)=>{
    let {email, password}= req.body;
    let user = await userModel.findOne({email});
    if(user){
        const passCompare = password == user.password;
        if(passCompare){
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, "secret_ecom");
            res.json({success: true, token});
        }else{
            res.json({success: false, errors: "Wrong Password"});
        }
    }else{
        res.json({success: false, errors: "Wrong Email ID"});
    }
}

export {
    signup,
    login
}