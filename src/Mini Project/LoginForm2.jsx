import React, { useState } from "react";
import "./Text.css";

function LoginForm2() {
  const [form, setform] = useState({ email: "", password: "" });
  const [error, seterror] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      seterror("All Field are required so fill all input filed");
    } else if (!form.email.includes("@")) {
      seterror("Enter Valid email");
    } else if (form.password.length < 6) {
      seterror("Password Should Be at least 6");
    } else {
        seterror("");
      alert("Form Submit Successfully...");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <h2>Login Form 2</h2>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="email-grp">
            <label>Email</label>
            <input type="text" name="email" value={form.email} onChange={onChange}/>
          </div>
          <div className="password-grp">
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={onChange} />
          </div>
          <div className="btn">
            <button id="btn">Login here</button>
          </div>
           {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm2;
