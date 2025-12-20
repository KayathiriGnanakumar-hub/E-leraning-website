import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="register"
      className="min-h-[90vh] flex items-center justify-center bg-[#F5F3FF] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          Create Your Account
        </h2>

        <p className="text-center text-sm text-gray-500 mb-6">
          Start learning and build industry-ready skills
        </p>

        {/* INPUTS */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2
            text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* REGISTER BUTTON */}
        <button
          className="w-full py-2.5 rounded-lg font-semibold text-white
          bg-gradient-to-r from-indigo-600 to-purple-600
          hover:opacity-90 transition"
        >
          Register
        </button>

        {/* LOGIN LINK */}
        <p className="text-sm text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <a
            href="#login"
            className="text-indigo-700 font-semibold hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </section>
  );
}
