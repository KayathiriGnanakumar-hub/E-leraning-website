import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

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

        {/* PASSWORD */}
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full border border-violet-300 rounded-lg px-3 py-2 pr-10"
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border border-violet-300 rounded-lg px-3 py-2 pr-10"
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-600"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

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
