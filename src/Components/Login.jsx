import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const storedUser = JSON.parse(
      localStorage.getItem("learnix_user")
    );

    if (!storedUser) {
      alert("No user found. Please register.");
      return;
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("learnix_logged_in", "true");

      if (storedUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/students");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl
        shadow-xl p-8 border-2 border-violet-600">

        <h2 className="text-3xl font-bold text-center text-violet-700 mb-6">
          Login
        </h2>

        <input
          placeholder="Email"
          className="w-full border border-violet-300 rounded-lg px-3 py-2 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-violet-300 rounded-lg px-3 py-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full py-3 rounded-lg border-2 border-violet-600
          bg-violet-50 text-violet-700 font-semibold
          hover:bg-violet-600 hover:text-white transition"
        >
          Login
        </button>
      </div>
    </section>
  );
}
