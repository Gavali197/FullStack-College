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

function App() {
  return (
    <div className="App">
      {/* <StylePractice />   */}

      <div className="Counter">{/* <CounterApp /> */}</div>

      {/* <Products /> */}

      {/* <TodosApp /> */}

      <div className="userlist">{/* <UserList /> */}</div>

      <div className="login">{/* <LoginForm /> */}</div>

      <div className="header">{/* <Header />   */}</div>
      {/* <StylePractice /> */}
      <Clock />

      <Fetch_PostList />

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

      {/* <UncontrolledForm /> */}

      {/* build frist login form using controlled form */}

      {/* <LoginForm1 /> */}
    </div>
  );
}

export default App;
