import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/hompage/Homepage";
import AboutPage from "./pages/aboutpage/AboutPage";
import DepartmentPage from "./pages/departmentpage/DepartmentPage";
import CommunityHealth from "./pages/departmentpage/departments/CommunityHealth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dept" element={<DepartmentPage />} />
        {/* <Route path="/doctor" element={<DoctorsPage />} /> */}
        <Route path="/comm-health" element={<CommunityHealth />} />
      </Routes>

      {/* <AboutImg /> */}
    </div>
  );
}

export default App;
