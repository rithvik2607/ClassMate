const express = require('express');
const mongoose = require("mongoose");
const Attendance = require('../models/attendance');
const Meeting = require("../models/meeting");
const router = express.Router();

router.post("/join", async (req, res) => {
    const { name, meetId } = req.body;

    try {
        let meeting = await Meeting.findOne({
            meetId
        });
        if(!meeting) {
            return res.status(400).json({
                message: "This meet does not exist"
            });
        }

        let time = meeting.date;

        const email = meeting.email;

        let attend = await Attendance.findOne({
            meetId
        });
        if(attend) {
            attend.students.push(name);

            await attend.save();
        } else {
            const attendance = new Attendance({
                meetId,
                email,
                time
            });
    
            attendance._id = mongoose.Types.ObjectId();
            attendance.students.push(name);
    
            await attendance.save();
        }
    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Error in saving");
    }
});

module.exports = router;