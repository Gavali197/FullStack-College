// import './App.css'
// import Register from "./Component/Register";
import Insert from "./Component/insert";
import Delete from "./Component/Delete";
import Update from "./Component/Update";
import View from "./Component/view";
import { Route, Routes } from "react-router-dom";
import AdminController from "./Component/AdminController";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/adminController" element={<AdminController />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update" element={<Update />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
