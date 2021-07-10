import React, { useState } from "react";
import axios from "axios";
import { apiBaseURL } from "../../Config";
import { useHistory } from "react-router";
import { useAlert } from "react-alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const notification = useAlert();

  const submit = (e) => {
    e.preventDefault();
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
          setEmail("");
          setPassword("");
          history.push("/dashboard");
          notification.show("Logged In successfully", { type: "success" });
        })
        .catch((err) => {
          console.log(err);
          notification.show("Some error occured", { type: "error" });
        });
    }
  };
  return (
    <>
      <div className="container w-50">
        <h3 className="text-center py-5">Login Page</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="password"
            />
          </div>

          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
