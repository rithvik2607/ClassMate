const mongoose = require("mongoose")
const Teacher = new mongoose.Schema({
    Name:{
        type : String,
        required :true
    },
    StudentId:{
        type : String,
        required :true
    },
    Phone_number:{
        type : String,
        required :true
    }

   
})
 
module.exports = mongoose.models("Teachers",Teacher)