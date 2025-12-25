import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./Components/public/PublicLayout";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Login from "./Components/Login";

import StudentLayout from "./Components/student/StudentLayout";
import Dashboard from "./Components/student/Dashboard";

import AdminLayout from "./Components/admin/AdminLayout";
import AdminDashboard from "./Components/admin/AdminDashboard";
import ManageCourses from "./Components/admin/ManageCourses";

import ProtectedRoute from "./Components/auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* STUDENT */}
        <Route
          path="/students"
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<ManageCourses />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
