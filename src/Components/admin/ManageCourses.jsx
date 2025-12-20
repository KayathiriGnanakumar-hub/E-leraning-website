import { useEffect, useState } from "react";
import courseData from "../../data/courseData";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState("");

  const [form, setForm] = useState({
    title: "",
    price: "",
    duration: "",
    image: "",
  });

  // Load courses ONCE
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("admin_courses"));
    if (Array.isArray(stored) && stored.length > 0) {
      setCourses(stored);
    } else {
      setCourses(courseData);
      localStorage.setItem("admin_courses", JSON.stringify(courseData));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ADD / UPDATE course
  const saveCourse = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.duration) {
      alert("Please fill all required fields");
      return;
    }

    let updatedCourses;

    if (editingId !== "") {
      // ✅ UPDATE MODE (FIXED)
      updatedCourses = courses.map((course) =>
        String(course.id) === editingId
          ? { ...course, ...form }
          : course
      );
    } else {
      // ADD MODE
      const newCourse = {
        id: Date.now().toString(),
        ...form,
      };
      updatedCourses = [...courses, newCourse];
    }

    setCourses(updatedCourses);
    localStorage.setItem("admin_courses", JSON.stringify(updatedCourses));

    // Reset
    setForm({ title: "", price: "", duration: "", image: "" });
    setEditingId("");
  };

  // ENTER EDIT MODE (FIXED)
  const editCourse = (course) => {
    setEditingId(String(course.id)); // 🔑 normalize ID
    setForm({
      title: course.title,
      price: course.price,
      duration: course.duration,
      image: course.image || "",
    });
  };

  // DELETE
  const deleteCourse = (id) => {
    const updated = courses.filter(
      (course) => String(course.id) !== String(id)
    );
    setCourses(updated);
    localStorage.setItem("admin_courses", JSON.stringify(updated));

    if (String(id) === editingId) {
      setEditingId("");
      setForm({ title: "", price: "", duration: "", image: "" });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>

      {/* FORM */}
      <form
        onSubmit={saveCourse}
        className="bg-white p-6 rounded-xl shadow mb-8 grid gap-4 sm:grid-cols-2"
      >
        <input
          name="title"
          placeholder="Course Title"
          className="border p-2 rounded"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price (₹499)"
          className="border p-2 rounded"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="duration"
          placeholder="Duration (6 Weeks)"
          className="border p-2 rounded"
          value={form.duration}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL (optional)"
          className="border p-2 rounded"
          value={form.image}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`sm:col-span-2 py-2 rounded text-white ${
            editingId
              ? "bg-green-600 hover:bg-green-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* COURSE LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">Existing Courses</h2>

        <div className="space-y-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{course.title}</p>
                <p className="text-sm text-gray-500">
                  {course.duration} • {course.price}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => editCourse(course)}
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => deleteCourse(course.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
