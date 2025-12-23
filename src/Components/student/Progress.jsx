import { useEffect, useState } from "react";


export default function Progress() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];

    // If progress not exists, initialize it
    const initialized = enrolled.map((course) => ({
      ...course,
      progress: course.progress ?? 50,
    }));

    setCourses(initialized);
    localStorage.setItem("enrolled_courses", JSON.stringify(initialized));
  }, []);

  const completeCourse = (id) => {
    const updated = courses.map((course) =>
      course.id === id ? { ...course, progress: 100 } : course
    );

    setCourses(updated);
    localStorage.setItem("enrolled_courses", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Course Progress
      </h1>

      <div className="space-y-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">{course.title}</h3>
              <span className="text-indigo-600 font-medium">
                {course.progress}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            {course.progress < 100 ? (
              <button
                onClick={() => completeCourse(course.id)}
                className="mt-4 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Mark as Completed
              </button>
            ) : (
              <p className="mt-4 text-green-600 font-medium">
                ✔ Course Completed
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
