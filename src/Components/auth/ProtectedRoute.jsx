import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const isLoggedIn =
    localStorage.getItem("learnix_logged_in") === "true";

  const user = JSON.parse(
    localStorage.getItem("learnix_user")
  );

  if (!isLoggedIn || !user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
