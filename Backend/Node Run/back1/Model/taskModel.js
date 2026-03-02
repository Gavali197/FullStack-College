import mongoose, { Types } from "mongoose";

const taskschema = new mongoose.Schema({
    task : {
        type : String
    },

    date : {
        type : Date
    },

    Status : {
        type : String,
        enum : ['Pending', 'In Progress', 'Completed', 'Archived'],
        default : "Pending"
    }
})

module.exports = mongoose.model("taskApp", taskschema);