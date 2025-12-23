import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA8Kr3IgYzwh_y2NUXk1XyKYyMm_ps6Rc",
  authDomain: "learnix-f5120.firebaseapp.com",
  projectId: "learnix-f5120",
  storageBucket: "learnix-f5120.appspot.com", // ✅ FIXED
  messagingSenderId: "179322495990",
  appId: "1:179322495990:web:ba5e716c2c6d35d7c09dd7",
};

const app = initializeApp(firebaseConfig);

// ✅ AUTH (Login / Register)
export const auth = getAuth(app);

// ✅ DATABASE (Future use)
export const db = getFirestore(app);
