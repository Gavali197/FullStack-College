import React, { useState } from "react";
import { registerUser } from "./authFunction";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const Navigate = useNavigate();

  const [form, setform] = useState({ username: "", email: "", password: "" });
  const [error, seterror] = useState("");
  const [success, setsucess] = useState("");

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!form.username || !form.email || !form.password) {
      seterror("Fill all field");
      return;
    }

    const result = registerUser(form);

    if (!result.success) {
      seterror(result.message);
      return;
    }

    setsucess("Registration Successful! You can now login.");
    Navigate("/login");
    setform({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        username{" "}
        <input
          type="text"
          onChange={handleChange}
          value={form.username}
          name="username"
        />
        email{" "}
        <input
          type="text"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        password{" "}
        <input
          type="text"
          onChange={handleChange}
          value={form.password}
          name="password"
        />
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Registration;
