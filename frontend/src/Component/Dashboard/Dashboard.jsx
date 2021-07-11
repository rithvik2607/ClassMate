import React from "react";
import styles from "./Dashboard.module.css";
import { Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom'

function Dashboard() {
  const history = useHistory();

  function handleSubmit() {
    history.push("/teacher-form");
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Schedule a Meet</h1>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Schedule
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
