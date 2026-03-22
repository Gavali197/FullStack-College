import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./Components/BlogPost";
import Dashboard from "./Components/Dashboard";
import Blogs from "./Components/Blogs";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
