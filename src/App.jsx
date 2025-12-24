import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ========== LAYOUTS ========== */
import PublicLayout from "./Components/public/PublicLayout";
import StudentLayout from "./Components/student/StudentLayout";
import AdminLayout from "./Components/admin/AdminLayout";

/* ========== PUBLIC PAGES ========== */
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CourseDetails from "./Components/CourseDetails";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import Payment from "./Components/Payment";
import PaymentSuccess from "./Components/PaymentSuccess";

/* ========== STUDENT PAGES ========== */
import Dashboard from "./Components/student/Dashboard";
import MyCourses from "./Components/student/MyCourses";
import Progress from "./Components/student/Progress";
import Certificates from "./Components/student/Certificates";
import Internships from "./Components/student/Internships";

/* ========== ADMIN PAGES ========== */
import AdminDashboard from "./Components/admin/AdminDashboard";
import ManageCourses from "./Components/admin/ManageCourses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========= PUBLIC ROUTES ========= */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Hero />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />

          {/* ✅ PAYMENT ROUTES */}
          <Route path="payment" element={<Payment />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>

        {/* ========= STUDENT ROUTES ========= */}
        <Route path="/students" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="progress" element={<Progress />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="internships" element={<Internships />} />
        </Route>

        {/* ========= ADMIN ROUTES ========= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<ManageCourses />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
