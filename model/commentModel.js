const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
        min: 6
    },
    comments:[{
        comment:{
            type: String
        },
        rating:{
            type: Number
        }
    }]
},{timestamps: true})

const commentModel = mongoose.model("comments", cModel)
module.exports = commentModel