import React, { useState } from "react";
import styles from "./MeetPage.module.css";
import { TextField, Button } from "@material-ui/core";
import { useAlert } from "react-alert";
import { useRouteMatch } from "react-router-dom";

function MeetPage() {
  const notification = useAlert();
  const [name, setName] = useState("");

  const match = useRouteMatch("/meet/:id");

  const handleJoinMeet = () => {
    if (name === "")
      notification.show("Name Cannot be blank", { type: "error" });
    notification.show(match.params.id);
    window.location.href = `https://us04web.zoom.us/j/${match.params.id}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Join Meeting</h1>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className={styles.field}
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleJoinMeet}>
          Join
        </Button>
      </div>
    </div>
  );
}

export default MeetPage;
