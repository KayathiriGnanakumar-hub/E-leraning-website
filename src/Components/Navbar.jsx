import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getCartCount } from "../utils/cartStorage";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Scroll only for HOME sections
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

        {/* LOGO */}
        <div
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Learnix
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium items-center">
          <span onClick={() => goToSection("home")} className="cursor-pointer">
            Home
          </span>

          <span onClick={() => goToSection("courses")} className="cursor-pointer">
            Courses
          </span>

          <span onClick={() => goToSection("contact")} className="cursor-pointer">
            Contact
          </span>

          {/* ROUTE-BASED NAVIGATION */}
          <span onClick={() => navigate("/register")} className="cursor-pointer">
            Register
          </span>

          <span onClick={() => navigate("/login")} className="cursor-pointer">
            Login
          </span>

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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
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
          <p onClick={() => goToSection("contact")} className="py-2">Contact</p>

          <p onClick={() => navigate("/register")} className="py-2">
            Register
          </p>

          <p onClick={() => navigate("/login")} className="py-2">
            Login
          </p>

          <Link to="/cart" className="py-2 block">
            Cart ({getCartCount()})
          </Link>
        </div>
      )}
    </nav>
  );
}
