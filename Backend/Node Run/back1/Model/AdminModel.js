const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    city : {
        type : String
    }

})

module.exports = mongoose.model("Admin", adminSchema);
