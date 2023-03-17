const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})

module.exports = mongoose.model("Product", productSchema);