const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    book : {
        type: String,
        required : true
    },

    author : {
        type : String,
        required: true
    },

    price : {
        type : Number,
        required: true
    },

    rating : {
        type : String,
        min : 1,
        max : 5,
        required: true
    }
})

module.exports = mongoose.model("BookShelf", bookSchema);