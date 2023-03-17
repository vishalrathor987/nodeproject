const express  = require("express");
const Router = express.Router();
const Product = require("../modal/ProductModel");


Router.get('/',(req,res)=>{
    res.render("register");
})

// create and insert data 
Router.post('/add', async(req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
//   console.log(name, email, password);

    const product = new Product({
        name,
        email,
        password
    })
   
    const result = await product.save();
       if(result !== 0){
        res.redirect("/");
       }else{
        console.log("err is...");
       }
 
});

// show all data 
Router.get('/show',async(req,res)=>{
    const data = await Product.find();
   if(data !== null){
    res.render("show",{
        products : data
    })
   }else{
    console.log("err is.....")
   }
})

module.exports = Router;