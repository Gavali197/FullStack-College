// import './App.css'
// import Register from "./Component/Register";
import Insert from "./Component/insert";
import Delete from "./Component/Delete";
import Update from "./Component/Update";
import View from "./Component/view";
import { Route, Routes } from "react-router-dom";
import AdminController from "./Component/AdminController";
import ToDo from "./Component/ToDo";
import BookShelf from "./Component/BookShelf";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/bookmanage" element={<BookShelf />} />
        <Route path="/adminController" element={<AdminController />} />
        <Route path="/Todo" element={<ToDo />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update" element={<Update />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
