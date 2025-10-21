import React, { useState } from "react";
import "./Modern.css"; // we’ll create this next

function FancyLogin() {
  // ✅ Step 1: Manage form fields
  const [form, setForm] = useState({ email: "", password: "" });

  // ✅ Step 2: Manage messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Step 3: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ Step 4: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!form.email || !form.password) {
      setError("All fields are required ❗");
      setSuccess("");
    } else if (!form.email.includes("@")) {
      setError("Enter a valid email ✉️");
      setSuccess("");
    } else if (form.password.length < 6) {
      setError("Password must be at least 6 characters 🔐");
      setSuccess("");
    } else {
      setError("");
      setSuccess("🎉 Login Successful!");
      setForm({ email: "", password: "" }); // clear form
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">
        <h2>🌐 Stylish Login</h2>

        {/* Email Field */}
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className={error && !form.email ? "error-input" : ""}
        />

        {/* Password Field */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className={error && !form.password ? "error-input" : ""}
        />

        <button type="submit">Login</button>

        {/* Conditional rendering for messages */}
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
      </form>
    </div>
  );
}

export default FancyLogin;
