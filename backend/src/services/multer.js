import multer from "multer";
import path from "path";
// image storage engin
const myMulter = ()=>{
    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, "upload/images");
        },
        filename: (req, file, cb)=>{
            return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
        } 
    })
    const upload = multer({storage, dest:"/upload/images"});
    return upload;
}

export default myMulter;
