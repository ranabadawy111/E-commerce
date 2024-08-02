// creating middelware to fetch user
import jwt from "jsonwebtoken";
export const fetchUser = async(req, res, next)=>{
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({errors: "Please authentication using valid token"})
    }else{
        try{
            const data = jwt.verify(token, "secret_ecom");
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors: error})
        }
    }
}