import React from "react";
import styles from "./Signup.module.css";
import { TextField } from "@material-ui/core";

function Signup() {
  return (
    <div className={styles.container}>
      <form className={styles.registration} method="post">
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
        <button className={styles.pure_material_button_contained} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
