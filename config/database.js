const mongoose = require("mongoose");


// this line load all the data from env file to the "process"
require("dotenv").config();
const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Successful Connected");
    })
    .catch((error)=>{
        console.log("Error hai ");
        console.error(error.message);
        process.exit(1);

    });
}

module.exports = connectWithDb ;

