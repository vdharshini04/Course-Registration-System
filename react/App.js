import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndexPage from "./IndexPage";
import RegisterPage from "./RegisterPage";
import AvailableCourses from "./AvailableCourses";
import EnrolledStudents from "./EnrolledStudents";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<AvailableCourses />} />
        <Route path="/enrolled" element={<EnrolledStudents />} />
      </Routes>
    </Router>
  );
}
