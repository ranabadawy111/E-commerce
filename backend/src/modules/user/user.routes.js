import { Router } from "express";
const router = Router();
import myMulter from "../../services/multer.js";
import { productPic } from "./controller/user.control.js";


// creating upload end point for image
router.post("/upload", myMulter().single("product"), productPic);

export default router;