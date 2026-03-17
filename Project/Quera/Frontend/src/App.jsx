import { BrowserRouter, Router, Route } from "react-router-dom";
import BlogPost from "./Components/BlogPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route element={<BlogPost />} path="/blogpost" />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
