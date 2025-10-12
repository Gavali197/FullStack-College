import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormWithSession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email) {
      setMessage("❌ Please fill in all fields.");
      setMessageType("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Invalid email format.");
      setMessageType("error");
      return;
    }

    // ✅ Success
    setMessage("✅ Form submitted successfully!");
    setMessageType("success");

    // Save session
    sessionStorage.setItem("user", name);

    // Navigate to Home after 2 seconds
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <h2>React Form with Session</h2>

      {/* Message Box */}
      {message && (
        <div
          style={{
            ...styles.messageBox,
            backgroundColor: messageType === "success" ? "#d4edda" : "#f8d7da",
            color: messageType === "success" ? "#155724" : "#721c24",
          }}
        >
          {message}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "80px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  messageBox: {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default FormWithSession;
