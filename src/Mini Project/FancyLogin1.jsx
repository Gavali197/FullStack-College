import './Modern.css';
import React, { useState } from "react";

function FancyLogin1() {
  // ✅ Step 1: Define states
  const [form, setform] = useState({ email: "", password: "" });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  // ✅ Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handlesubmit = (e) => {
    e.prevantDefault();

    if (!form.email || !form.password) {
      seterror("Please fill all fields ❗");
      return;
    } else if (!form.email.includes("@")) {
      seterror("Enter valid email ✉️");
      return;
    } else {
      seterror("");
    }

    // ✅ Step 4: Simulate API call
    setloading(true); // show loader
    setsuccess("");

    setTimeout(() => {
      setloading(false); // hide loader after fake delay
      setsuccess("🎉 Login Successful!");
      setform({ email: "", password: "" }); // clear form
    }, 2000); // simulate 2-second API response
  };
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handlesubmit}>
        <h2>🚀 Login (with Loading)</h2>

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {/* ✅ Disable button while loading */}
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* ✅ Conditional rendering */}
        {loading && <div className="spinner"></div>}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default FancyLogin1;
