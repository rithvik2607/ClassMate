import React, { useState } from "react";
import styles from "./Signup.module.css";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { apiBaseURL } from "../../Config";
import { useAlert } from "react-alert";
// import {}

function Signup() {
  const history = useHistory();
  const notification = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    if (password.length < 6) {
      notification.show("Password should be of 6 characters min.", {
        type: "error",
      });
    } else {
      axios
        .post(`${apiBaseURL}user/signup`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setEmail("");
          setPassword("");
          notification.show("Signed Up successfully", {
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          notification.show("Something went wrong", {
            type: "error",
          });
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.login}>Sign Up</h1>
        <div className={styles.fieldsContainer}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            className={styles.field}
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className={styles.field}
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Signup;
