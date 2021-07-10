import React, { useState } from "react";
import styles from "./Expandable.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { TextField, Button } from "@material-ui/core";

const ExpandableComponent = ({ title, info, handleData }) => {
  const [expanded, setExpanded] = useState(false);
  const [question, setQuestion] = useState();
  const [opt1, setOpt1] = useState();
  const [opt2, setOpt2] = useState();
  const [opt3, setOpt3] = useState();
  const [opt4, setOpt4] = useState();
  const [answer, setAnswer] = useState();
  return (
    <article className={styles.Question}>
      <header>
        <h4
          onClick={() => setExpanded(!expanded)}
          className={styles.QuestionTitle}
        >
          {title}
        </h4>
        <button className={styles.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </header>
      {expanded && (
        <div className={styles.expandable}>
          <TextField
            onChange={(e) => setQuestion(e.target.value)}
            variant="outlined"
            label="Question"
            className={styles.exp}
          />
          <TextField
            onChange={(e) => setOpt1(e.target.value)}
            variant="outlined"
            label="Option 1"
            className={styles.exp}
          />
          <TextField
            onChange={(e) => setOpt2(e.target.value)}
            variant="outlined"
            label="Option 2"
            className={styles.exp}
          />
          <TextField
            onChange={(e) => setOpt3(e.target.value)}
            variant="outlined"
            label="Option 3"
            className={styles.exp}
          />
          <TextField
            onChange={(e) => setOpt4(e.target.value)}
            variant="outlined"
            label="Option 4"
            className={styles.exp}
          />
          <TextField
            onChange={(e) => setAnswer(e.target.value)}
            variant="outlined"
            label="Answer"
            className={styles.exp}
          />
          <Button
            variant="contained"
            color="primary"
            className={styles.Teacher}
            onClick={() => {
              handleData({ question, opt1, opt2, opt3, opt4, answer });
              setExpanded(false)
            }}
          >
            Done
          </Button>
        </div>
      )}
    </article>
  );
};

export default ExpandableComponent;
