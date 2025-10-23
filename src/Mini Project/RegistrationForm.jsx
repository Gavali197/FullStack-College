// import React, { useState } from "react";
// import './Text.css'

// function RegistrationForm() {
//   const [form, setform] = useState({
//     user: "",
//     email: "",
//     password: "",
//     Cpassword: "",
//   });

//   const [success, setSuccess] = useState("");

//   const [error, seterror] = useState("");

//   const change = (e) => {
//     const {name, value} = e.target;
//     setform({...form, [name]:value});
//   };

//   const handleSubmbit = (e) => {
//     e.preventDefault();

//     if (!form.user || !form.email || !form.password || !form.Cpassword) {
//       seterror("Fill All Field");
//     } else if (!form.email.includes("@")) {
//       seterror("Invalid Email");
//     } else if (form.password.length < 6) {
//       seterror("Password Should Be at Least 6 charecters");
//     } else if (form.password !== form.Cpassword) {
//       seterror("Password Does Not Match ");
//     } else {
//       seterror("");
//       setSuccess("Registration Successfully...");
//     }

//     {success && <p style={{color:"green"}}>{success}</p>}

//     // ✅ Show form data in console
//       console.log("User Registered:", form);

//       // ✅ Clear form fields
//       setform({
//         user: "",
//         email: "",
//         password: "",
//         Cpassword: "",
//       });

//   };
//   return (
//     <div>
//       <div className="container">
//         <form onSubmit={handleSubmbit}>
//         <h2>Registration Form</h2>
//         <label>Name </label>
//         <input type="text" name="user" value={form.user} onChange={change}/>
//         <label>Email</label>
//         <input type="text" name="email" value={form.email} onChange={change}/>
//         <label>Password </label>
//         <input type="text" name="password" value={form.password}onChange={change}/>
//         <label>Confirm Password</label>
//         <input type="text" name="Cpassword" value={form.Cpassword} onChange={change} />
//         <button id="btn">Submit</button>
//         <p style={{color:"red"}}>{error}</p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm;

import React, { useState } from "react";
import "Modern.css";


function RegistrationForm() {
  const [form, setform] = useState({ email: "", password: "", phone: "" });
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState(" ");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.email || !form.password || !form.phone){
      seterror("fill form");
    }else if(!form.email.includes("@")) {
      seterror("invalid email");
    }else if(!form.password < 6){
      seterror("Password Should be at least six charecters");
    }else if(form.phone > 10 ){
      seterror("Your Number Is not right");
    }else{
      seterror("");
    }

    setloading(true);
    setsuccess("");

    setTimeout(() => {
      setloading(false);
      setsuccess("registration success ");
      setform({email: "", password: "", phone: ""});
    }, 2000);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
             <div className="container">
        <div className="header">Registration Form</div>
        email :
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={form.email}
        />
        password :
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={form.password}
        />
        phone :
        <input
          type="text"
          onChange={handleChange}
          name="phone"
          value={form.phone}
        />
        <div className="sbtbtn">
          <button type="submit" disabled={loading} >
            {loading ? "logging in" : "login"}
          </button>
        </div>
        {loading && <div className="spinner"></div>}
        {error && <div className="error"></div>}
        {success && <div className="success"></div>}
      </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
