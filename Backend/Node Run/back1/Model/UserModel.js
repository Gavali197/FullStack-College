const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        require : true
    },
    city : {
        type : String,
        require : true
    }

})

module.exports = mongoose.model("user", UserSchema);