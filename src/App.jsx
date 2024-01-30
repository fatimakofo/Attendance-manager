import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/screens/admin-dashboard";
import AttendanceList from "./pages/admin-dashboard-attendanceList";
import Tutor from "./pages/tutor-dashboard";
import AddTutor from "./pages/add new tutor";
import AddStudent from "./pages/add new student";
import AttendanceCheckBox from "./pages/attendanceCheckBox";
import Students from "./pages/admin/screens/students";
import Tutors from "./pages/admin/screens/tutors";

// ----------------------------------------------------------------
// Setup routes for the application pages
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route
          path="/admin-dashboard-attendanceList"
          element={<AttendanceList />}
        />
        <Route path="/tutor-dashboard" element={<Tutor />} />
        <Route path="/add-new-student" element={<AddStudent />} />
        <Route path="/mark-attendance" element={<AttendanceCheckBox />} />
      </Routes>
    </>
  );
}

export default App;
