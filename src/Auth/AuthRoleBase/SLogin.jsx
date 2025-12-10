import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./authFunction";

const SLogin = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({ email: "", password: "" });
  const [error, seterror] = useState("");
  // const [success, setsucess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // validate

    if (!form.email || !form.password) {
      seterror("Fill All Field");
    }

    const result = loginUser(form.email, form.password);

    if (!result.success) {
      seterror(result.message);
      return;
    }

    seterror("");
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        email:{" "}
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={form.email}
        />
        password:{" "}
        <input
          type="text"
          onChange={handleChange}
          name="password"
          value={form.password}
        />
        <button type="submit">Login</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </>
  );
};

export default SLogin;
