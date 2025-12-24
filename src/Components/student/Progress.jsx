import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function Progress() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const ref = collection(
        db,
        "users",
        user.uid,
        "enrolledCourses"
      );

      const snap = await getDocs(ref);
      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setCourses(data);
    });

    return () => unsub();
  }, []);

  const markCompleted = async (courseId) => {
    const user = auth.currentUser;
    if (!user) return;

    const ref = doc(
      db,
      "users",
      user.uid,
      "enrolledCourses",
      courseId
    );

    await updateDoc(ref, {
      progress: 100,
      completed: true,
    });

    setCourses((prev) =>
      prev.map((c) =>
        c.id === courseId
          ? { ...c, progress: 100, completed: true }
          : c
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Course Progress
      </h1>

      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white p-5 rounded-xl shadow mb-4"
        >
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">{course.title}</h3>
            <span className="text-indigo-600">
              {course.progress || 0}%
            </span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{
                width: `${course.progress || 0}%`,
              }}
            />
          </div>

          {!course.completed ? (
            <button
              onClick={() => markCompleted(course.id)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            >
              Mark as Completed
            </button>
          ) : (
            <p className="mt-4 text-green-600 font-medium">
              ✔ Completed
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
