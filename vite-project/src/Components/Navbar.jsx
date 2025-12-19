import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getCartCount } from "../utils/cartStorage";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo test */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-indigo-600"
          >
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
            <path d="M11 12.98L3 9v6l8 4 8-4V9l-8 3.98z" />
          </svg>
          <h1 className="text-2xl font-bold text-indigo-600">Learnix</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium">
          <span onClick={() => goToSection("home")} className="cursor-pointer">Home</span>
          <span onClick={() => goToSection("courses")} className="cursor-pointer">Courses</span>
          <span onClick={() => goToSection("register")} className="cursor-pointer">Register</span>
          <span onClick={() => goToSection("login")} className="cursor-pointer">Login</span>
          <span onClick={() => goToSection("contact")} className="cursor-pointer">Contact</span>

          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-xl" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white
              text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (TEXT) */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          <p onClick={() => goToSection("home")} className="py-2">Home</p>
          <p onClick={() => goToSection("courses")} className="py-2">Courses</p>
          <p onClick={() => goToSection("register")} className="py-2">Register</p>
          <p onClick={() => goToSection("login")} className="py-2">Login</p>
          <p onClick={() => goToSection("contact")} className="py-2">Contact</p>
          <Link to="/cart" className="py-2 block">
            Cart ({getCartCount()})
          </Link>
        </div>
      )}
    </nav>
  );
}
