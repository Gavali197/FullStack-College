import React, { useContext, useState } from "react";
import { AuthContext, AuthProvide } from "./Concept/ContexsApi/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const { login } = useContext(AuthProvide);
  const navigate = useNavigate();

  const [form, setform] = useState({ email: "", password: "" });
  const [error, seterror] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(form.email, form.password);

    if (result.success) {
      navigate("/");
    } else {
      seterror(result.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setform({ ...form, password: e.target.value })}
        />

        <button>Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AuthLogin;
