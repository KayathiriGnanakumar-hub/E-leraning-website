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
      navigate("/students");
    } else {
      alert("Invalid credentials");
    }
  };

  const loginWithGoogle = () => {
    alert("Google login will be added soon");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 px-4"
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl
        shadow-xl p-8 border-2 border-violet-600"
      >
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

        {/* LOGIN BUTTON */}
        <button
          onClick={loginUser}
          className="w-full py-3 rounded-lg border-2 border-violet-600
          bg-violet-50 text-violet-700 font-semibold
          hover:bg-violet-600 hover:text-white transition duration-300"
        >
          Login
        </button>

        {/* OR DIVIDER */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* CONTINUE WITH GOOGLE */}
        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-3
          py-3 rounded-xl border-2 border-violet-600
          bg-white text-violet-700 font-semibold
          hover:bg-violet-600 hover:text-white
          transition duration-300"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 bg-white rounded-full"
          />
          Continue with Google
        </button>
      </div>
    </section>
  );
}
