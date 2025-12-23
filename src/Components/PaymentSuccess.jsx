import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-2xl shadow text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>
        <button
          onClick={() => navigate("/students")}
          className="px-8 py-3 bg-green-600 text-white rounded-lg"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
