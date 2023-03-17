const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 
const prodRoutes = require("./routes/productRoutes"); 

const app = express();
mongoose.connect("mongodb://localhost:27017/company",{useNewUrlParser : true});


const db = mongoose.connection;
db.on("error",()=>{
    console.log("err is...")
});

db.once('open',()=>{
    console.log("connected");
});
app.set("view engine", 'ejs');

// bodyParser
app.use(bodyParser.urlencoded({extended:false}))
// parse application json
app.use(bodyParser.json())

app.use('/', prodRoutes);

// app.get('/',(err,res)=>
// {
//     res.send("hellow");
// })


app.listen(4000, () => console.log("server running"));