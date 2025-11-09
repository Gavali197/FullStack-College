import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Contexts
import {
  ThemeProvider,
  useTheme,
} from "./Components/Concept/ContexsApi/ThemeContext";
import Usercontext from "./Components/Concept/ContexsApi/Usercontext";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Components/Concept/ContexsApi/Profile";
import UserFormContext from "./Components/Concept/UserFormContext";
import RegistrationForm from "./Mini Project/RegistrationForm";
import LoginForm2 from "./Mini Project/LoginForm2";
import FancyLogin from "./Mini Project/FancyLogin1";
import Home from "./Exam/Home";
import FormWithSession from "./Exam/Form";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: "red",
        color: theme.color,
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle to {theme.mode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1>Global Theme Toggle</h1>
      <ThemeToggleButton />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
