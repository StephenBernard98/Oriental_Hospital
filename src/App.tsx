import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/hompage/Homepage";
import AboutPage from "./pages/aboutpage/AboutPage";
import DepartmentPage from "./pages/departmentpage/DepartmentPage";
import CommunityHealth from "./pages/departmentpage/departments/CommunityHealth";
import Orthopaedics from "./pages/departmentpage/departments/Orthopaedics";
import Radiology from "./pages/departmentpage/departments/Radiology";
import QualityAssurance from "./pages/departmentpage/departments/QualityAssurance";
import IntensiveCare from "./pages/departmentpage/departments/IntensiveCare";
import Dentistry from "./pages/departmentpage/departments/Dentistry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dept" element={<DepartmentPage />} />
        {/* <Route path="/doctor" element={<DoctorsPage />} /> */}
        <Route path="/comm-health" element={<CommunityHealth />} />
        <Route path="/orthopaedics" element={<Orthopaedics />} />
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/intensive-care" element={<IntensiveCare />} />
        <Route path="/dentistry" element={<Dentistry />} />
      </Routes>

      {/* <AboutImg /> */}
    </div>
  );
}

export default App;
