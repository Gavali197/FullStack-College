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
        type : Number,
        min : 1,
        max : 5,
        required: true
    },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("BookShelf", bookSchema);