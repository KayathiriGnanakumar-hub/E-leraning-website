import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in or not admin
  if (!isLoggedIn || !user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin allowed
  return children;
}
