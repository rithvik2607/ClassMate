const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const Message = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    contacts: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model("Message", Message, 'message');