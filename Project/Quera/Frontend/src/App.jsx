import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./Components/BlogPost";
import Dashboard from "./Components/Dashboard";
import Blogs from "./Components/Blogs";
import Login from "./Components/Login";
import Registration from "./Components/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
