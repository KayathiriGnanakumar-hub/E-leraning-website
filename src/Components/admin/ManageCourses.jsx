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

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("admin_courses"));
    if (Array.isArray(stored) && stored.length > 0) {
      setCourses(stored);
    } else {
      setCourses(courseData);
      localStorage.setItem("admin_courses", JSON.stringify(courseData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveCourse = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.duration) {
      alert("Please fill all required fields");
      return;
    }

    let updatedCourses;

    if (editingId) {
      updatedCourses = courses.map((course) =>
        String(course.id) === editingId ? { ...course, ...form } : course
      );
    } else {
      updatedCourses = [
        ...courses,
        { id: Date.now().toString(), ...form },
      ];
    }

    setCourses(updatedCourses);
    localStorage.setItem("admin_courses", JSON.stringify(updatedCourses));

    setForm({ title: "", price: "", duration: "", image: "" });
    setEditingId("");
  };

  const editCourse = (course) => {
    setEditingId(String(course.id));
    setForm({
      title: course.title,
      price: course.price,
      duration: course.duration,
      image: course.image || "",
    });
  };

  const deleteCourse = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Manage Courses
      </h1>

      {/* ADD / EDIT FORM */}
      <form
        onSubmit={saveCourse}
        className="bg-white rounded-2xl shadow p-6 mb-10"
      >
        <h2 className="text-lg font-semibold mb-4 text-indigo-700">
          {editingId ? "Edit Course" : "Add New Course"}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="title"
            placeholder="Course Title"
            className="border p-2 rounded-lg"
            value={form.title}
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price (₹499)"
            className="border p-2 rounded-lg"
            value={form.price}
            onChange={handleChange}
          />

          <input
            name="duration"
            placeholder="Duration (6 Weeks)"
            className="border p-2 rounded-lg"
            value={form.duration}
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Image URL (optional)"
            className="border p-2 rounded-lg"
            value={form.image}
            onChange={handleChange}
          />
        </div>

        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="mt-4 h-32 rounded-lg object-cover border"
          />
        )}

        <button
          type="submit"
          className={`mt-5 w-full py-2 rounded-lg text-white font-semibold ${
            editingId
              ? "bg-green-600 hover:bg-green-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* COURSE LIST */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-semibold mb-4">Existing Courses</h2>

        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center gap-4">
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-14 object-cover rounded-md"
                  />
                )}
                <div>
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-gray-500">
                    {course.duration} • {course.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => editCourse(course)}
                  className="text-indigo-600 hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCourse(course.id)}
                  className="text-red-600 hover:underline text-sm"
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
