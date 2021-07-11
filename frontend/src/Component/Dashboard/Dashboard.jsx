import React from "react";
import styles from "./Dashboard.module.css";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

function Dashboard(props) {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Schedule a Meet</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={history.push("/teacher-form")}
        >
          Schedule
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
