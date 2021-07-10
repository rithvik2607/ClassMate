import React from "react";
import styles from "./Signup.module.css";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked on Submit");

    history.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form className={styles.registration} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Sign Up</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Signup;
