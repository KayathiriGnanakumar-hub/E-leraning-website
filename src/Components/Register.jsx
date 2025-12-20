import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "student",
    name: "",
    email: "",
    gender: "",
    studentId: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful. Please login.");
    navigate("/#login");
  };

  return (
    <section id="register" className="min-h-screen flex justify-center items-center bg-[#F5F3FF] px-4">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Register
        </h2>

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <input name="name" placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange} />

        <input name="email" placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange} />

        <select
          name="gender"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {form.role === "student" && (
          <input
            name="studentId"
            placeholder="Student ID"
            className="w-full border p-2 rounded mb-3"
            onChange={handleChange}
          />
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <button
          onClick={registerUser}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Register
        </button>

      </div>
    </section>
  );
}
