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


