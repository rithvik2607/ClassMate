const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const Meeting = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    meetId: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true
    },
    pollData: [{
        answer: {
            type: String,
            required: true
        },
        opt1: {
            type: String,
            required: true
        },
        opt2: {
            type: String,
            required: true
        },
        opt3: {
            type: String,
            required: true
        },
        opt4: {
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        }
    }],
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Meeting", Meeting, 'meetings');