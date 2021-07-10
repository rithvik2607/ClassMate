const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const Teacher = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    email:{
        type : String,
        required :true
    },
    password:{
        type : String,
        required :true
    }
})
 
module.exports = mongoose.model("Teachers",Teacher)