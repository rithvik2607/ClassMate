import React, { useState } from 'react';
import FormDataService from "../../services/serviceForm";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!email || !password) alert("Email or Password is blank");
        else{
            var data = {
                email: email,
                password: password
            }
            FormDataService.sendLoginDetail(data);
            setEmail("")
            setPassword("")
        }

    }
    return (
        <>
            <div className="container w-50">
                <h3 className="text-center py-5">
                    Login Page
                </h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" />
                    </div>
                    
                    <button type="submit" className="btn">Sign In</button>
                </form>
            </div>
        </>
    )
}
