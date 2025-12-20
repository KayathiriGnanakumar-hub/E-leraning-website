import { useEffect, useState } from "react";

export default function Dashboard() {
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);
  const [internshipEligible, setInternshipEligible] = useState(false);

  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];

    const completed = enrolled.filter(
      (course) => course.progress === 100
    );

    setEnrolledCount(enrolled.length);
    setCompletedCount(completed.length);
    setCertificateCount(completed.length);
    setInternshipEligible(completed.length >= 1);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Student Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Monitor your learning progress and achievements.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* ENROLLED COURSES */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Enrolled Courses
          </h3>
          <p className="text-3xl font-bold text-indigo-600">
            {enrolledCount}
          </p>
        </div>

        {/* COMPLETED COURSES */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Completed Courses
          </h3>
          <p className="text-3xl font-bold text-green-600">
            {completedCount}
          </p>
        </div>

        {/* CERTIFICATES */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Certificates Earned
          </h3>
          <p className="text-3xl font-bold text-purple-600">
            {certificateCount}
          </p>
        </div>

        {/* INTERNSHIP STATUS */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-700 mb-1">
            Internship Status
          </h3>

          {internshipEligible ? (
            <p className="text-green-600 font-semibold">
              Eligible
            </p>
          ) : (
            <p className="text-yellow-600 font-semibold">
              Not Eligible
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
