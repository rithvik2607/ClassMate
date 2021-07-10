import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { AlertTemplate } from "./Component/Notification/Notification";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  transition: transitions.FADE,
  containerStyle: {
    marginTop: "13.5vh",
  },
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
