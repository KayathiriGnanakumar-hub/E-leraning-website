import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="login"   // ✅ FIX: added id ONLY
      className="min-h-[80vh] flex items-center justify-center bg-[#F5F3FF] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center text-purple-700 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-slate-600 mb-6">
          Login to continue your learning journey
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

        <button className="w-full py-2 rounded-md font-medium text-white
        bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90">
          Login
        </button>
      </div>
    </section>
  );
}
