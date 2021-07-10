//include required modules
const jwt = require("jsonwebtoken");
const config = require("./config");
const rp = require("request-promise");
const dotenv = require("dotenv");
const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();

const client = require("twilio")(config.accountSid, config.authToken);

//Use the ApiKey and APISecret from config.js
const payload = {
  iss: config.APIKey,
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, config.APISecret);

router.post("/newmeeting", (req, res) => {
  const { time, date, studentData, pollData } = req.body;

  console.log(time)
  console.log(date)
  console.log(studentData)
  console.log(pollData)


  email = "shivansh.spandey@gmail.com";
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "test create meeting",
      type: 2,
      start_time: JSON.stringify(date) + "T" + JSON.stringify(time) + "Z",
      duration: 30,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response);
      res.send("create meeting result: " + JSON.stringify(response));
      for(let index=0; index<studentData.length - 1;index++){
        client.messages
          .create({
            body: "Your meet is been scheduled on time: "+ time +" and on date " + date + " and URL: " + "https://localhost:5000/meet/" + response["id"],
            from: "+13372430938",
            to: "+91" + JSON.stringify(studentData[index]["Phone Number"]),
          }).then((message) => console.log(message.sid));
        }
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});



module.exports = router;
