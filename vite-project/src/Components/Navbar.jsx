import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navClass =
    "cursor-pointer hover:text-indigo-600 transition";

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO (UNCHANGED) */}
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

        {/* LINKS (FIXED) */}
        <div className="space-x-8 font-medium text-lg hidden md:flex">
          <span className={navClass} onClick={() => goToSection("home")}>
            Home
          </span>
          <span className={navClass} onClick={() => goToSection("courses")}>
            Courses
          </span>
          <span className={navClass} onClick={() => goToSection("register")}>
            Register
          </span>
          <span className={navClass} onClick={() => goToSection("login")}>
            Login
          </span>
          <span className={navClass} onClick={() => goToSection("contact")}>
            Contact
          </span>

          {/* CART = ROUTE */}
          <Link to="/cart" className={navClass}>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
