import { useEffect, useState } from "react";
import courseData from "../../data/courseData";

export default function AdminDashboard() {
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalEnrollments, setTotalEnrollments] = useState(0);

  useEffect(() => {
    // Total courses from courseData
    setTotalCourses(courseData.length);

    // Simulated total students (stored once)
    let students = localStorage.getItem("total_students");
    if (!students) {
      localStorage.setItem("total_students", "120");
      students = "120";
    }
    setTotalStudents(Number(students));

    // Total enrollments from enrolled courses
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];
    setTotalEnrollments(enrolled.length);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Admin Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Platform overview and administrative statistics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* TOTAL COURSES */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Total Courses
          </h3>
          <p className="text-3xl font-bold text-indigo-600">
            {totalCourses}
          </p>
        </div>

        {/* TOTAL STUDENTS */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Total Students
          </h3>
          <p className="text-3xl font-bold text-green-600">
            {totalStudents}
          </p>
        </div>

        {/* TOTAL ENROLLMENTS */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Total Enrollments
          </h3>
          <p className="text-3xl font-bold text-purple-600">
            {totalEnrollments}
          </p>
        </div>

      </div>
    </div>
  );
}
