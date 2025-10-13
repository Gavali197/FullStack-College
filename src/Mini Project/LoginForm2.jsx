import React, { useState } from "react";
import "./Text.css";

function LoginForm2() {
    const [form, setform] = useState({ email: "", password: "" }); 
    const [error, seterror] = useState("");

    const handlesubmit = (e) =>{
        e.prevantDefault();

        if()
    }

    return (
    <div>
      <div className="container">
        <div className="header"><h2>Login Form 2</h2></div>
        <form>
          <div className="email-grp">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="password-grp">
            <label>Password</label>
            <input type="text" />
          </div>
          <div className="btn">
            <button id="btn">Login here</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm2;
