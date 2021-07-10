import React, { useState } from "react";
import styles from "./Signup.module.css";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { apiBaseURL } from "../../Config";

function Signup() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post(`${apiBaseURL}/users/signup`, data)
      .then((res) => {
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
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
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className={styles.field}
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
