import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const API = "http://localhost:3030/api/v2";

  const handlForm = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.email || !form.password) {
      return seterror("All fields are required");
    }

    if (!form.email.includes("@")) {
      return seterror("Invalid email");
    }

    if (form.password.length < 6) {
      return seterror("Password must be at least 6 characters");
    }

    seterror("");

    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 🔥 for cookies
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // Save session data
sessionStorage.setItem("user", JSON.stringify({ id: 1, name: "Alice" }));

// Retrieve session data
const user = JSON.parse(sessionStorage.getItem("user"));

// // Clear session
// sessionStorage.removeItem("user");


      if (res.ok) {
        navigate("/");
      } else {
        return seterror(data.message || "Login failed");
      }
    } catch (err) {
      seterror("Something went wrong" + err);
    }
  };
  return (
    <div>
      <div className="container-login">
        <form onSubmit={handlForm}>
          <label>email </label>
          <input
            type="text"
            onChange={onchange}
            value={form.email}
            name="email"
          />
          <label>password </label>
          <input
            type="password"
            onChange={onchange}
            value={form.password}
            name="password"
          />
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <a href="/register">Link</a>
      </div>
    </div>
  );
};

export default Login;
