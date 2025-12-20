import { useEffect, useState } from "react";

export default function Internships() {
  const [eligible, setEligible] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];

    setCourses(enrolled);

    // Simulate eligibility:
    // If enrolled in 2 or more courses → eligible
    if (enrolled.length >= 2) {
      setEligible(true);
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Internship Opportunities
      </h1>

      <p className="text-gray-600 mb-6">
        Based on your learning progress and performance.
      </p>

      {/* ELIGIBILITY STATUS */}
      <div
        className={`mb-6 p-4 rounded-xl font-medium ${
          eligible
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {eligible
          ? "🎉 You are eligible for internship opportunities!"
          : "⚠️ Complete more courses to become eligible for internships."}
      </div>

      {/* INTERNSHIP LIST */}
      {eligible && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-gray-800 mb-1">
              Frontend Developer Intern
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              React · HTML · CSS · JavaScript
            </p>
            <button className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-gray-800 mb-1">
              Python Developer Intern
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Python · Automation · APIs
            </p>
            <button className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-gray-800 mb-1">
              Data Science Intern
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Python · ML · Data Analysis
            </p>
            <button className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
