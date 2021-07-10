import React from "react";
import styles from "./MeetPage.module.css";
import { TextField, Button } from "@material-ui/core";

function MeetPage() {
  return (
    <div className={styles.container}>
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Button variant="contained" color="primary">
          Join
        </Button>
      </div>
    </div>
  );
}

export default MeetPage;
