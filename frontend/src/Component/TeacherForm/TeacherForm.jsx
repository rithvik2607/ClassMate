import React, { useState, useEffect, useRef, Component } from "react";
import { TextField, Button, Accordion } from "@material-ui/core";
import styles from "./TeacherForm.module.css";
import ExpandableComponent from "./Expandable/Expandable";
import * as XLSX from "xlsx";
import axios from "axios";
import { apiBaseURL } from "../../Config";

class TeacherForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
      totalPolls: 0,
      list: [],
      time: "",
      date: "",
      pollData: [],
      studentData: "",
      email: "",
    };
    this.pollDataFunction = this.pollDataFunction.bind(this);
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    console.log(this.state.file);
  }

  readFile(e) {
    e.preventDefault();
    var f = this.state.file;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      console.log("Data>>>" + data); // shows that excel data is read
      console.log(this.convertToJson(data));
      this.setState({ studentData: this.convertToJson(data) });
      const formData = {
        time: this.state.time,
        date: this.state.date,
        studentData: this.state.studentData,
        pollData: this.state.pollData,
        email: this.state.email,
      };
      console.log(formData);
      axios
        .post(`${apiBaseURL}meet/newmeeting`, formData)
        .then((res) => {
          console.log(res);
          this.props.history.push("/dashboard");
        })
        .catch((err) => console.log(err));
    };
    reader.readAsBinaryString(f);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");

    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    return result; //JSON
  }

  pollDataFunction(value) {
    console.log(value);
    this.setState({ pollData: [...this.state.pollData, value] });
  }

  render() {
    return (
      <div className={styles.bg_img}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <h1>Schedule Meet</h1>
            <label className={styles.Label}>
              Enter Students' Details:
              <input
                type="file"
                className={styles.Input}
                ref="fileUploader"
                onChange={this.filePathset.bind(this)}
              />
            </label>
            <div className={styles.dateTime}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="time"
                onChange={(e) => this.setState({ time: e.target.value })}
                className={styles.Teacher}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="date"
                onChange={(e) => this.setState({ date: e.target.value })}
                className={styles.Teacher}
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Host Email"
              variant="outlined"
              type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              className={styles.Teacher}
            />
            <TextField
              id="outlined-basic"
              label="Number of Polls"
              variant="outlined"
              type="number"
              onChange={(e) =>
                this.setState({ list: [...this.state.list, e.target.value] })
              }
              className={styles.Teacher}
            />
            <div className={styles.expandableContainer}>
              {this.state.list.map((itm) => {
                return (
                  <ExpandableComponent
                    title={`Question ${itm}`}
                    handleData={this.pollDataFunction}
                  />
                );
              })}
            </div>
            <Button
              variant="contained"
              color="primary"
              className={styles.Teacher}
              onClick={() => {
                this.readFile();
              }}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherForm;
