
import userModel from '../../../../DB/models/user.model.js';
import productModel from './../../../../DB/models/product.model.js';
// adding product
const addProduct = async(req, res)=>{
    let products= await productModel.find({}); // return array of objects
    let id =0;
    if(products.length){
        let lastProductArray = products.slice(-1); // last object(product) in array
        let lastProduct = lastProductArray[0];
        id= lastProduct.id+1;
    }else{
        id = 1;
    }
    // console.log(products)
    let { name, image, category, new_price, old_price} = req.body;
    const saveProduct = new productModel({id:id, name, image, category, new_price, old_price});
    const saved = await saveProduct.save();
    res.json({message: "productAdded", success: true, name, saved});
}
// delete product
const deleteProduct = async(req, res)=>{
    const {id}=req.params;
    let deleted = await productModel.findOneAndDelete({id});
    res.json({message: "deleted", success: 1, deleted})
}

// get all product
const allProducts = async(req, res)=>{
    const products = await productModel.find({});
    res.send(products);
}

// get new collection
const getNewCollections = async(req, res)=>{
    let products = await productModel.find({});
    let newcollection = products.slice(1).slice(-8);
    res.send(newcollection);
}

// get popular in women section
const popularInWomen = async(req, res)=>{
    let products = await productModel.find({category: "women"});
    let popular_in_women = products.slice(0, 4);
    res.send(popular_in_women);
}

const addToCart = async(req, res)=>{
    let userData = await userModel.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await userModel.findByIdAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
    res.json({message: "Added"})
}

const removeFromCart = async(req, res)=>{
    let userData = await userModel.findOne({_id: req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await userModel.findOneAndDelete({_id:req.user.id}, {cartData: userData.cartData});
    res.json({message: "Deleted"})
}

// creating endpoint to get cartdata
const getCart = async(req, res)=>{
    let userData = await userModel.findOne({_id: req.user.id});
    res.json(userData.cartData);
}

export {
    addProduct,
    deleteProduct,
    allProducts,
    getNewCollections,
    popularInWomen,
    addToCart,
    removeFromCart,
    getCart
}