import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    location: "",
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
    if (!form.name || !form.email || !form.password || !form.cpassword) {
      return seterror("All fields are required");
    }

    if (form.name.length < 3) {
      return seterror("Name must be at least 3 characters");
    }

    if (!form.email.includes("@")) {
      return seterror("Invalid email");
    }

    if (form.password.length < 6) {
      return seterror("Password must be at least 6 characters");
    }

    if (form.password !== form.cpassword) {
      return seterror("Passwords do not match");
    }

    seterror("");

    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          location: form.location,
        }), // 👈 cpassword NOT sent
      });

      const data = await res.json(); // 👈 important

      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      // ❌ Other errors
      if (!res.ok) {
        seterror(data.message);
        return;
      }

      seterror("");
      // ✅ Success
      alert("User Registered Successfully");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handlForm}>
        name :
        <input type="text" name="name" value={form.name} onChange={onchange} />
        email :
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={onchange}
        />
        password :
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onchange}
        />
        confirm password :
        <input
          type="password"
          name="cpassword"
          value={form.cpassword}
          onChange={onchange}
        />
        location :
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={onchange}
        />
        <button type="submit">Register User</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Registration;
