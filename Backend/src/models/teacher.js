const mongoose = require("mongoose")
const Teacher = new mongoose.Schema({
    Name:{
        type : String,
        required :true
    },
    Phone_number:{
        type : String,
        required :true
    },

    Email:{
        type : String,
        required :true
    },
    Password:{
        type : String,
        required :true
    }
   
})
 
module.exports = mongoose.models("Teachers",Teacher)