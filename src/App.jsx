import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= PUBLIC LAYOUT ================= */
import PublicLayout from "./Components/public/PublicLayout";

/* ================= PUBLIC PAGES ================= */
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import CourseDetails from "./Components/CourseDetails";

/* ================= STUDENT PANEL ================= */
import StudentLayout from "./Components/student/StudentLayout";
import Dashboard from "./Components/student/Dashboard";
import MyCourses from "./Components/student/MyCourses";
import Progress from "./Components/student/Progress";
import Certificates from "./Components/student/Certificates";
import Internships from "./Components/student/Internships";

import AdminLayout from "./Components/admin/AdminLayout";
import AdminDashboard from "./Components/admin/AdminDashboard";
import ManageCourses from "./Components/admin/ManageCourses";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/" element={<PublicLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Courses />
                <Register />
                <Login />
                <Contact />
              </>
            }
          />

          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* ========== STUDENT PANEL ROUTES ========== */}
        <Route path="/students" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="progress" element={<Progress />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="internships" element={<Internships />} />
        </Route>
        {/* ========== ADMIN PANEL ROUTES ========== */}
<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="courses" element={<ManageCourses />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}
