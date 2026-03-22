const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email: {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true

    },
    location : {
        type : String
    }

})

module.exports = mongoose.model("User Data", UserSchema);