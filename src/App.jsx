import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ===== Layouts ===== */
import PublicLayout from "./Components/public/PublicLayout.jsx";
import StudentLayout from "./Components/student/StudentLayout.jsx";
import AdminLayout from "./Components/admin/AdminLayout.jsx";

/* ===== Public Pages ===== */
import Hero from "./Components/Hero.jsx";
import Courses from "./Components/Courses.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Cart from "./Components/Cart.jsx";
import CourseDetails from "./Components/CourseDetails.jsx";

/* ===== Student Pages ===== */
import Dashboard from "./Components/student/Dashboard.jsx";
import MyCourses from "./Components/student/MyCourses.jsx";
import Progress from "./Components/student/Progress.jsx";
import Certificates from "./Components/student/Certificates.jsx";
import Internships from "./Components/student/Internships.jsx";

/* ===== Admin Pages ===== */
import AdminDashboard from "./Components/admin/AdminDashboard.jsx";
import ManageCourses from "./Components/admin/ManageCourses.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<PublicLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Courses />
                <Contact />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* STUDENT */}
        <Route path="/students" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="progress" element={<Progress />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="internships" element={<Internships />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<ManageCourses />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
