import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (!sessionUser) {
      // Redirect if no session found
      navigate("/");
    } else {
      setUser(sessionUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Welcome, {user} 👋</h2>
      <p>You have successfully logged in using React Session!</p>
      <button onClick={handleLogout} style={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#e9f7ef",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  logoutBtn: {
    marginTop: "15px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
