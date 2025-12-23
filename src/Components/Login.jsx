import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      // 1️⃣ Login with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2️⃣ Reference Firestore user document
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      // 3️⃣ If profile does NOT exist → create it
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          role: "student", // default role
          createdAt: serverTimestamp(),
        });
      }

      // 4️⃣ Read role (new or existing)
      const finalSnap = await getDoc(userRef);
      const userData = finalSnap.data();

      // 5️⃣ Role-based redirect
      if (userData.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/students");
      }

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-[#F5F3FF] px-4">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login
        </h2>

        <input
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>

      </div>
    </section>
  );
}
