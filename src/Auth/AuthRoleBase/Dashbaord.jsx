import React from "react";
import { useNavigate } from "react-router-dom";

const Dashbaord = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div>
      Welcome, {user.username}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashbaord;
