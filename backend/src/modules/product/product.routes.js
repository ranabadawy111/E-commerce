
import { Router } from "express";
import { addProduct, addToCart, allProducts, deleteProduct, getCart, getNewCollections, popularInWomen, removeFromCart } from "./cotroller/product.control.js";
import { fetchUser } from './../../middlewares/auth.js';
const router = Router();

router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/allProducts", allProducts);
router.get("/newcollections", getNewCollections);
router.get("/popularinwomen", popularInWomen);
router.post("/addtocart", fetchUser, addToCart);
router.post("/removefromcart", fetchUser, removeFromCart);
router.post("/getcart", fetchUser, getCart);
export default router;