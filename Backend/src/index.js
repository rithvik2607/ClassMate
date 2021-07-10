const express = require('express');
const mongoose = require("mongoose");
const signup = require("./routes/signup");
require('dotenv').config();

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
app.use("/signup", signup);
app.listen(port, () => console.log("The application is listening on port " + port));