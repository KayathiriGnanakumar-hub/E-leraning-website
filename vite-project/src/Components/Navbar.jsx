import { Link, useLocation } from "react-router-dom";
import { getCartCount } from "../utils/cartStorage";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const cartCount = getCartCount();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo (UNCHANGED) */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-11 h-11 text-indigo-600"
          >
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
            <path d="M11 12.98L3 9v6l8 4 8-4V9l-8 3.98z" />
          </svg>
          <h1 className="text-3xl font-bold text-indigo-600">Learnix</h1>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">

          {isHome && (
            <>
              <a href="#home">Home</a>
              <a href="#courses">Courses</a>
              <a href="#register">Register</a>
              <a href="#login">Login</a>
              <a href="#contact">Contact</a>
            </>
          )}

          {/* ✅ OLD CART ICON (PROFESSIONAL) */}
          <Link to="/cart" className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-7 h-7 text-gray-700 group-hover:text-indigo-600 transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386a.75.75 0 01.728.586L5.25 7.5m0 0h13.5l-1.35 6.75a.75.75 0 01-.735.6H8.25a.75.75 0 01-.735-.6L5.25 7.5zM8.25 21a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>

            {/* Cart Count Badge */}
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
