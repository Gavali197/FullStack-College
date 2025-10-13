import React, { useState } from "react";
import './Text.css'

function RegistrationForm() {
  const [form, setform] = useState({
    user: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  const [error, seterror] = useState("");

  const change = (e) => {
    const {name, value} = e.target;
    setform({...form, [name]:value});
  };

  const handleSubmbit = (e) => {
    e.preventdefault();

    if (!form.user || !form.email || form.password || form.Cpassword) {
      seterror("Fill All Field");
    } else if (form.email.includes("@")) {
      seterror("Invalid Email");
    } else if (form.password.length < 6) {
      seterror("Password Should Be at Least 6 charecters");
    } else if (form.password !== form.Cpassword) {
      seterror("Password Does Not Match ");
    } else {
      seterror("");
      alert("Successfully Registration ✅");
    }
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmbit}>
        <h2>Registration Form</h2>
        <label>Name </label>
        <input type="text" name="name" value={change}/>
        <label>Email</label>
        <input type="text" name="email" value={change}/>
        <label>Password </label>
        <input type="text" name="password" value={change}/>
        Confirm Password
        <input type="text" name="cpassword" value={change} />
        <button id="btn">Submit</button>
        <p style={{color:"red"}}>{error}</p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
