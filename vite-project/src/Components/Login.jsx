import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="login"
      className="min-h-[80vh] flex items-center justify-center bg-[#F5F3FF] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-extrabold text-center text-indigo-700 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-sm text-gray-500 mb-6">
          Login to continue your learning journey
        </p>

        <input
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300
          focus:ring-2 focus:ring-indigo-500"
          placeholder="Email address"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300
            focus:ring-2 focus:ring-indigo-500"
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          className="w-full py-2.5 rounded-lg font-semibold text-white
          bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
        >
          Login
        </button>
        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        {/* Google */}
        <button
          className="mt-4 w-full py-2.5 rounded-lg border
          flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
          />
          Continue with Google
        </button>

        {/* Facebook */}
        <button
          className="mt-3 w-full py-2.5 rounded-lg border
          flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            className="w-5"
          />
          Continue with Facebook
        </button>

        <button
          className="mt-3 w-full py-2.5 rounded-lg border
          flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
        <FaApple className="text-xl" />
         Continue with Apple
        </button>

      </div>
    </section>
  );
}
