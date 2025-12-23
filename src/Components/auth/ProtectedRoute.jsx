import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export default function ProtectedRoute({ children, allowedRole }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const { role } = userDoc.data();
        setAuthorized(role === allowedRole);
      } else {
        setAuthorized(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [allowedRole]);

  // ✅ FIX: show loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-indigo-600 font-semibold">
        Checking access...
      </div>
    );
  }

  // ❌ Not authorized → redirect
  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  // ✅ Authorized → render page
  return children;
}
