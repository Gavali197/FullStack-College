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
import "./Modern.css";

function RegistrationForm() {
  const [form, setForm] = useState({ email: "", password: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Form validation and submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password || !form.phone) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    } else if (!form.email.includes("@")) {
      setError("Invalid email format.");
      setSuccess("");
      return;
    } else if (form.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      setSuccess("");
      return;
    } else if (form.phone.length !== 10 || isNaN(form.phone)) {
      setError("Phone number must be exactly 10 digits.");
      setSuccess("");
      return;
    }

    // If everything is valid
    setError("");
    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("Registration successful 🎉");
      setForm({ email: "", password: "", phone: "" });
      console.log("Form Data Submitted:", form);
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="header">Registration Form</div>

          <label>Email:</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            value={form.email}
          />

          <label>Password:</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={form.password}
          />

          <label>Phone:</label>
          <input
            type="text"
            onChange={handleChange}
            name="phone"
            value={form.phone}
          />

          <div className="sbtbtn">
            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          {loading && <div className="spinner"></div>}
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
