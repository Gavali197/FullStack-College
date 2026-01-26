const mongoose = require("mongoose");

const mongoDb = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/practice");
        console.log("Connection Success");
    }catch(err){
        console.error(err.message);
        console.log("Connection are sleeped down");
        process.exit(1);
    };
};

module.exports = mongoDb