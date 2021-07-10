import React, { useState } from "react";
import axios from "axios";
import { apiBaseURL } from "../../Config";
import { useHistory } from "react-router";
import { useAlert } from "react-alert";
import styles from "./Login.module.css";
import { Button, TextField } from "@material-ui/core";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const notification = useAlert();

  const submit = (e) => {
    if (!email || !password)
      notification.show("Email or Password is blank", { type: "error" });
    else {
      var data = {
        email: email,
        password: password,
      };
      axios
        .post(`${apiBaseURL}/user/login`, data)
        .then((res) => {
          history.replace("/dashboard");
          notification.show("Logged In successfully", { type: "success" });
        })
        .catch((err) => {
          console.log(err);
          notification.show("Some error occured", { type: "error" });
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.login}>Login Page</h1>
        <div className={styles.fieldsContainer}>
          <TextField
            label="Email"
            variant="outlined"
            className={styles.field}
            fullWidth
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            className={styles.field}
            fullWidth
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" onClick={submit}>
          Login
        </Button>
      </div>
    </div>
  );
}
