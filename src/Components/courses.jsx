import { Link } from "react-router-dom";
import courseData from "../data/courseData";

export default function Courses() {
  // 🔐 Always read fresh from localStorage
  const adminCourses = JSON.parse(localStorage.getItem("admin_courses"));

  // ✅ Fallback if admin has not added courses
  const courses =
    Array.isArray(adminCourses) && adminCourses.length > 0
      ? adminCourses
      : courseData;

  return (
    <section id="courses" className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-2xl font-bold mb-8 text-slate-900 text-center">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="h-36 mb-3 overflow-hidden rounded-lg bg-gray-100">
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-sm mb-1 text-gray-800">
                {course.title}
              </h3>

              <p className="text-xs text-gray-500 mb-1">
                Duration: {course.duration}
              </p>

              <p className="text-indigo-700 font-semibold mb-3">
                {course.price}
              </p>

              <Link
                to={`/course/${course.id}`}
                className="mt-auto text-center border border-indigo-600 text-indigo-600 py-2 rounded-md text-sm font-semibold hover:bg-indigo-600 hover:text-white transition"
              >
                Enroll
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
