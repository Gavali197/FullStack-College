import React, { useState } from "react";
import "./Text.css";

function LoginForm2() {
    const [form, setform] = useState({ email: "", password: "" }); 
    const [error, seterror] = useState("");

    const handlesubmit = (e) =>{
        e.prevantDefault();

        if(!form.email || !form.password){
            seterror("All Field are required so fill all input filed");
        }else if(!form.email.includes("@")){
            seterror("Enter Valid email");
        }else if(!form.password < 6){
            seterror("Password Should Be at least 6");
        }else{
            alert("Form Submit Successfully...");
        }
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
