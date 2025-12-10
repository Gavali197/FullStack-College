import React, { useState } from "react";
import { registerUser } from "./authFunction";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const Navigate = useNavigate();

    const [form, setform] = useState({ username: "", email: "", password: "" });
  const [error, seterror] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setform({ ...form, [name]: value });
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
