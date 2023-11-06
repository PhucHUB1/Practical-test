const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    // _id
    product_code: {
        type:String,
        require:true,
        unique:true
    },
    product_name:{
        type:String,
        require:[true,"Truong nay can nhap dung du lieu"],
      
    },
    date:{
        type:String,
        require:true
    },
    price:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    store_code:{
        type:String,
        require:true,
        unique:true
    }

});
module.exports = mongoose.model("Product",user_schema);