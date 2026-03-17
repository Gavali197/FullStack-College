const mongoDb = require("mongoose")

const dbConnection = async ()=>{
    try{
        const connection = await mongoDb.connect("mongodb://localhost:27017/practice");
        if(!connection){
            console.log("Connection Failed");
        }
        console.log("Connection Success fully");
        
    }catch(err){
        console.error(err + "Server Error from connection side");
        process.exit(1)
    }

}

module.exports = dbConnection;