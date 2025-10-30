import logo from "./logo.svg";
import "./App.css";
import Name from "./Components/Name";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Counter from "./Components/Counter";
import CounterApp from "./Components/Small Components/CounterApp";
import LoginForm from "./Components/Small Components/LoginForm";
import Products from "./Components/Small Components/Products";
import TodosApp from "./Components/Small Components/TodosApp";
import UserList from "./Components/Small Components/UserList";
import StylePractice from "./Components/Small Components/StylePractice";
import ControlledForm from "./Components/Small Components/ControlledForm";
import UncontrolledForm from "./Components/Small Components/UncontrolledForm";
import LoginForm1 from "./Mini Project/LoginForm1";
import UseEffects from "./Components/UseEffects";
import Clock from "./Components/Small Components/Clock";
import Fetch from "./Components/Small Components/Fetch";
import Fetch_PostList from "./Components/Small Components/Fetch_PostList";
import UseMemo from "./Components/Concept/UseMemo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormWithSession from "./Exam/Form";
import Home from "./Exam/Home";
import UseRef from "./Components/Concept/UseRef";
import LoginForm2 from "./Mini Project/LoginForm2";
import RegistrationForm from "./Mini Project/RegistrationForm";
import FancyLogin from "./Mini Project/FancyLogin1";
import ThemeContext from "./Components/Concept/ContexsApi/ThemeContext"


function AppRepresent() { 
   const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
 }
}

function App() {
 
 AppRepresent();

  return (

   <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          height: "100vh",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>🌗 Theme Toggler using Context API</h1>
        <ThemeButton />
        <ThemeBox />
      </div>
    </ThemeContext.Provider>
  );    

    <div className="App">
    {/* <LoginForm2 /> This Is small project part of the data */}
    {/* <FancyLogin /> */}

    <RegistrationForm />

    {/* <UseRef /> */}

      {/* <StylePractice />   */}

      <div className="Counter">{/* <CounterApp /> */}</div>

      {/* <Products /> */}

      {/* <TodosApp /> */}

      <div className="userlist">{/* <UserList /> */}</div>

      <div className="login">{/* <LoginForm /> */}</div>

      <div className="header">{/* <Header />   */}</div>
      {/* <StylePractice /> */}
      {/* <Clock /> */}

    

      {/* <Fetch_PostList /> */}

      {/* <Fetch /> */}

      {/* <Name />   */}
      {/* <Card /> */}
      <br />
      {/* <Footer /> */}
      {/* <Counter /> */}

      {/* <UseEffects /> */}

      {/*Session 5 Controlled Form Using UseState -> ControlledForm */}

      {/* <ControlledForm /> */}

      {/*Session 5 unControlled Form Using UseState -> unControlledForm */}

      {/* <UseMemo /> */}

      {/* <UncontrolledForm /> */}

      {/* build frist login form using controlled form */}

      {/* <LoginForm1 /> */}
    </div>
);
}

export default App;
