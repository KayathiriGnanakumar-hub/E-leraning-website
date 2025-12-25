import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // ✅ TEMP FRONTEND AUTH
    localStorage.setItem("learnix_user", JSON.stringify(form));

    alert("Registration successful. Please login.");
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl
        shadow-xl p-8 border-2 border-violet-600">

        <h2 className="text-3xl font-bold text-center text-violet-700 mb-6">
          Create Account
        </h2>

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border border-violet-300 rounded-lg px-3 py-2 mb-3"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border border-violet-300 rounded-lg px-3 py-2 mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border border-violet-300 rounded-lg px-3 py-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-violet-300 rounded-lg px-3 py-2 mb-4"
          onChange={handleChange}
        />

        <button
          onClick={registerUser}
          className="w-full py-3 rounded-lg border-2 border-violet-600
          bg-violet-50 text-violet-700 font-semibold
          hover:bg-violet-600 hover:text-white transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-violet-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </section>
  );
}
