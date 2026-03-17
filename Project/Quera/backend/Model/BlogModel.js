const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    heading : {
        type : String,
        required: true
    },

    description :  {
        type : String
    },

    author : {
        type : String
    }
})

module.exports = mongoose.model("BlogData", blogSchema);