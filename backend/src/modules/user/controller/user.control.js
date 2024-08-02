
const productPic = (req, res)=>{
    res.json({
        success: 1,
        image_url: `http://localhost:3000/images/${req.file.filename}`,
    });
    console.log(req.file.filename)
}



export {
    productPic
}