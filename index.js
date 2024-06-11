const express= require('express');

const app= express();
require("dotenv").config();
const PORT = process.env.PORT || 8000 ;
//middleware to parse json request body 
app.use(express.json());

const blog = require("./routes/blog")

//mount
app.use("/api/v1" , blog);

const connectWithDb = require("./config/database");
connectWithDb();
app.listen(PORT , ()=>{
    console.log("Server Started on 4000");
   
})

//default routes
app.get("/" , (req , res)=>{
    res.send(`<h1>This is homepage</h1>`);
})