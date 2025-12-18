import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="register"   // ✅ FIX: added id ONLY
      className="min-h-[90vh] flex items-center justify-center bg-[#F5F3FF] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-1">
          Create Your Account
        </h2>
        <p className="text-center text-sm text-slate-600 mb-6">
          Start learning and build industry-ready skills
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 rounded-md border border-slate-300
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-2 rounded-md border border-slate-300
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full mb-4 px-4 py-2 rounded-md border border-slate-300
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            className="w-full px-4 py-2 rounded-md border border-slate-300
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
        bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition shadow">
          Register
        </button>
      </div>
    </section>
  );
}
