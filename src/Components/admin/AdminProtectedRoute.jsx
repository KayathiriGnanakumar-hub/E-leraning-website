import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedIn || !user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
