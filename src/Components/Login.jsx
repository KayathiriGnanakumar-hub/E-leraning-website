import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Please register first");
      return;
    }

    if (
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      alert("Invalid credentials");
      return;
    }

    // ✅ FINAL LOGIN STATE (IMPORTANT)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(storedUser));

    // 🔁 Resume pending course
    const pendingCourse = localStorage.getItem("pending_course");
    if (pendingCourse) {
      localStorage.removeItem("pending_course");
      navigate(`/course/${pendingCourse}`);
      return;
    }

    // Role redirect
    if (storedUser.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/students");
    }
  };

  return (
    <section id="login" className="min-h-screen flex justify-center items-center bg-[#F5F3FF] px-4">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login
        </h2>

        <input
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>

      </div>
    </section>
  );
}
