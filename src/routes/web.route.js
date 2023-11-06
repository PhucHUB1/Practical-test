const express = require("express");
const router = express.Router();
router.get("/product",function(req,res){
    res.render("product/product");
})
router.post("/product",controller.postProduct);
module.exports = router;


