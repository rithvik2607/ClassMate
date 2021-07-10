const mongoose = require("mongoose")
const StudentDetail = new mongoose.Schema({
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
 
module.exports = mongoose.models("StudentDetail",StudentDetail)