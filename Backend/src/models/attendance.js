const mongoose = require("mongoose")
const attendance = new mongoose.Schema({
    id:{
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
 
module.exports = mongoose.model("attendance",attendance)