import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-2xl shadow text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          You are now enrolled in your selected courses.
        </p>

        <button
          onClick={() => navigate("/students")}
          className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
        >
          Go to Dashboard
        </button>
      </div>
    </section>
  );
}
