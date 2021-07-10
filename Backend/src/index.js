const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const user = require("./routes/user");
const meeting = require("./routes/newMeeting/newMeeting");
const attend = require("./routes/attendance");
require('dotenv').config();

const corsOpts = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  };

const uri = process.env.MONGODB_TOKEN;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOpts));
app.use("/user", user);
app.use("/meet", meeting);
app.use("/attend", attend);

app.listen(port, () => console.log("The application is listening on port " + port));