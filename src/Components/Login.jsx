import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="login"
      className="min-h-[80vh] flex items-center justify-center bg-[#F5F3FF] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center text-purple-700 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-slate-600 mb-6">
          Access your learning space and continue building your skills
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-4 px-4 py-2 rounded-md border
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2
            text-slate-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          className="w-full py-2 rounded-md font-medium text-white
          bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
        >
          Login
        </button>

        {/* ✅ PROFESSIONAL STUDENT DASHBOARD CTA */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600 mb-2">
            Want to explore the student learning experience?
          </p>
          <Link
            to="/students"
            className="inline-block w-full py-2 rounded-md
            border-2 border-indigo-600 text-indigo-600 font-semibold
            hover:bg-indigo-600 hover:text-white transition"
          >
            Explore Student Dashboard
          </Link>
        </div>

      </div>
    </section>
  );
}
