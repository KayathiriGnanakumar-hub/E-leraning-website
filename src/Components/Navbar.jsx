import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { getCartCount } from "../utils/cartStorage";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, profile, loading } = useAuth();

  // 🔐 Logout using Firebase
  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // ⭐ Home scroll (only on /)
  const goToHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      document
        .getElementById("home")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={goToHome}
        >
          <img src="/logo.png" alt="Learnix" className="h-8" />
          <span className="text-xl font-bold text-indigo-600">
            Learnix
          </span>
        </div>

        {/* MENU */}
        <div className="flex items-center gap-6 font-medium">

          <button onClick={goToHome}>Home</button>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>

          {/* AUTH */}
          {!loading && !user && (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}

          {!loading && user && profile && (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="text-right leading-tight hover:opacity-80"
              >
                <p className="text-sm font-semibold text-gray-700">
                  {profile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {profile.email}
                </p>
                <p className="text-[10px] text-indigo-600 uppercase">
                  {profile.role}
                </p>
              </Link>

              <button
                onClick={logout}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </div>
          )}

          {/* CART */}
          <Link to="/cart" className="relative">
            <FiShoppingCart size={20} />
            {getCartCount() > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-500 text-white
                text-xs w-5 h-5 flex items-center justify-center rounded-full"
              >
                {getCartCount()}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}
