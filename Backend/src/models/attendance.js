const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const Attendance = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    meetId:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    students : [{

        type: String
    
    }]
    
   
})
 
module.exports = mongoose.model("attendance", Attendance)