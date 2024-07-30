import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeManagement from "./pages/EmployeeManagement";
import AddEditEmployee from "./pages/AddEditEmployee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeManagement />} />
          <Route path="/add-employee" element={<AddEditEmployee />} />
          <Route path="/edit-employee/:id" element={<AddEditEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
