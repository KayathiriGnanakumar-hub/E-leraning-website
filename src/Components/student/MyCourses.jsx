import { useEffect, useState } from "react";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];
    setCourses(enrolled);
  }, []);

  if (courses.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          My Courses
        </h1>
        <p className="text-gray-600">
          You have not enrolled in any courses yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        My Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {course.duration}
              </p>

              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                In Progress
              </span>

              <button
                className="mt-4 w-full py-2 rounded-md
                bg-indigo-600 text-white font-medium
                hover:bg-indigo-700 transition"
              >
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
