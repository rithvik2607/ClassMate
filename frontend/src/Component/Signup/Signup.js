import React from 'react'
import './Components/Signup/Signup.css';

function Signup() {

    
    return (
        <div>
        <form className="registration" method="post">
        <h1>👋 Welcome!</h1>
           <input className="pure-material-textfield-outlined" placeholder=" " type="email" required />
           <input className="pure-material-textfield-outlined" placeholder=" " type="password" required />
           <button className="pure-material-button-contained" type="submit">Sign Up</button>

        </ form>
            <div class="left-footer">
                Created by Ben Szabo (finnhvman)
                <br/>
            </div>

      </div>
        
    )
}

export default Signup

