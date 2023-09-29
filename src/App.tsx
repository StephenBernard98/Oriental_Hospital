import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Wrapper from "./layout/Wrapper";
// import DoctorsPage from "./pages/doctorspage/DoctorsPage";
// import DepartmentPage from "./pages/departmentpage/DepartmentPage";
// import AboutLayout from "./pages/aboutpage/AboutLayout";
// import DoctorLayout from "./pages/doctorspage/DoctorLayout";
// import DepartmentLayout from "./pages/departmentpage/DepartmentLayout";
import Homepage from "./pages/hompage/Homepage";
import AboutPage from "./pages/aboutpage/AboutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/doctor" element={<DoctorsPage />} />
        <Route path="/dept" element={<DepartmentPage />} /> */}
      </Routes>

      {/* <AboutImg /> */}
    </div>
  );
}

export default App;
