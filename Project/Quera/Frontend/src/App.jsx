import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./Components/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blogpost" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
