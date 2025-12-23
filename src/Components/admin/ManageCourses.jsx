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
    if (stored && stored.length > 0) {
      setCourses(stored);
    } else {
      setCourses(courseData);
      localStorage.setItem("admin_courses", JSON.stringify(courseData));
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveCourse = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.duration) return;

    let updated;
    if (editingId) {
      updated = courses.map((c) =>
        String(c.id) === editingId ? { ...c, ...form } : c
      );
    } else {
      updated = [...courses, { id: Date.now().toString(), ...form }];
    }

    setCourses(updated);
    localStorage.setItem("admin_courses", JSON.stringify(updated));
    setForm({ title: "", price: "", duration: "", image: "" });
    setEditingId("");
  };

  const deleteCourse = (id) => {
    if (!window.confirm("Delete this course?")) return;
    const updated = courses.filter((c) => String(c.id) !== String(id));
    setCourses(updated);
    localStorage.setItem("admin_courses", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Courses</h1>

      <form onSubmit={saveCourse} className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="font-semibold mb-4 text-indigo-700">
          {editingId ? "Edit Course" : "Add Course"}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <input name="title" placeholder="Title" className="border p-2 rounded" onChange={handleChange} value={form.title} />
          <input name="price" placeholder="Price" className="border p-2 rounded" onChange={handleChange} value={form.price} />
          <input name="duration" placeholder="Duration" className="border p-2 rounded" onChange={handleChange} value={form.duration} />
          <input name="image" placeholder="Image URL" className="border p-2 rounded" onChange={handleChange} value={form.image} />
        </div>

        {form.image && <img src={form.image} alt="preview" className="mt-4 h-32 rounded" />}

        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="bg-white p-6 rounded-2xl shadow">
        {courses.map((c) => (
          <div key={c.id} className="flex justify-between border-b py-3">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-gray-500">{c.duration} • {c.price}</p>
            </div>
            <button onClick={() => deleteCourse(c.id)} className="text-red-600">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
