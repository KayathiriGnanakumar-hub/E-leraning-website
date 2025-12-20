import { useEffect, useState } from "react";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];

    const completed = enrolled.filter(
      (course) => course.progress === 100
    );

    setCertificates(completed);
  }, []);

  if (certificates.length === 0) {
    return (
      <p className="text-gray-600">
        Complete courses to unlock certificates.
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Certificates</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow p-5"
          >
            <h3 className="font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              Certificate of Completion
            </p>
            <button className="w-full py-2 bg-indigo-600 text-white rounded-md">
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
