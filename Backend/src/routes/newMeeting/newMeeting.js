//include required modules
const jwt = require("jsonwebtoken");
const config = require("./config");
const rp = require("request-promise");

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

//get the form
router.get("/", (req, res) => res.send(req.body));

router.post("/newmeeting",  (req, res) => {
  email = "shivansh.spandey@gmail.com";
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "test create meeting",
      type: 1,
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

      client.messages
        .create({
          body: "Your meet is been scheduled on time: and URL: " + "https://localhost:5000/meet/" + response["id"],
          from: "+13372430938",
          to: "+919712103373",
        })
        .then((message) => console.log(message.sid));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

//use userinfo from the form and make a post request to /userinfo
router.post("/userinfo", auth, (req, res) => {
  //store the email address of the user in the email variable
  email = req.body.email;
  //check if the email was stored in the console
  console.log(email);
  //Store the options for Zoom API which will be used to make an API call later.
  var options = {
    //You can use a different uri if you're making an API call to a different Zoom endpoint.
    uri: "https://api.zoom.us/v2/users/" + email,
    qs: {
      status: "active",
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

  //Use request-promise module's .then() method to make request calls.
  rp(options)
    .then(function (response) {
      //printing the response on the console
      console.log("User has", response);
      //console.log(typeof response);
      resp = response;
      //Adding html to the page
      var title1 = "<center><h3>Your token: </h3></center>";
      var result1 =
        title1 +
        '<code><pre style="background-color:#aef8f9;">' +
        token +
        "</pre></code>";
      var title = "<center><h3>User's information:</h3></center>";
      //Prettify the JSON format using pre tag and JSON.stringify
      var result =
        title +
        '<code><pre style="background-color:#aef8f9;">' +
        JSON.stringify(resp, null, 2) +
        "</pre></code>";
      res.send(result1 + "<br>" + result);
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

module.exports = router;
