const mongoose = require("mongoose");

const mongoDb = async () =>{
    try{
       await mongoose.connect("mongodb://localhost:27017/practice")
       console.log("connection Successfully");
    }catch(err){
        console.error(err.message, "Connection error");
        process.exit(1)
    }
}

module.exports = mongoDb