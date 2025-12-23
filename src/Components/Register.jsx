import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    try {
      if (!form.name || !form.email || !form.password) {
        alert("Please fill all required fields");
        return;
      }

      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      // 2️⃣ Store user profile in Firestore with role
      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        role: form.role, // 🔑 student OR admin
        createdAt: serverTimestamp(),
      });

      alert("Registration successful. Please login.");
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-[#F5F3FF] px-4">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Register
        </h2>

        {/* ROLE SELECTION */}
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          onChange={handleChange}
        />

        <button
          onClick={registerUser}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Register
        </button>

      </div>
    </section>
  );
}
