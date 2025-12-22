import { useEffect, useState } from "react";
import { FaBook, FaUserGraduate, FaClipboardList } from "react-icons/fa";
import courseData from "../../data/courseData";

export default function AdminDashboard() {
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalEnrollments, setTotalEnrollments] = useState(0);

  useEffect(() => {
    setTotalCourses(courseData.length);

    let students = localStorage.getItem("total_students");
    if (!students) {
      localStorage.setItem("total_students", "120");
      students = "120";
    }
    setTotalStudents(Number(students));

    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];
    setTotalEnrollments(enrolled.length);
  }, []);

  const Card = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-5">
      <div className={`p-4 rounded-xl ${color} text-white text-2xl`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Admin Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        Overview of platform statistics and activity
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Total Courses"
          value={totalCourses}
          icon={<FaBook />}
          color="bg-indigo-600"
        />
        <Card
          title="Total Students"
          value={totalStudents}
          icon={<FaUserGraduate />}
          color="bg-green-600"
        />
        <Card
          title="Total Enrollments"
          value={totalEnrollments}
          icon={<FaClipboardList />}
          color="bg-purple-600"
        />
      </div>
    </div>
  );
}
