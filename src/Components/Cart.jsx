import { useNavigate } from "react-router-dom";
import { getCartItems } from "../utils/cartStorage";
import { db } from "../firebase";


export default function Cart() {
  const navigate = useNavigate();
  const cartItems = getCartItems();

  const handlePayment = () => {
    // Read already enrolled courses
    const enrolled =
      JSON.parse(localStorage.getItem("enrolled_courses")) || [];

    // Add new courses (avoid duplicates)
    const updated = [...enrolled];
    cartItems.forEach((item) => {
      if (!updated.some((c) => c.id === item.id)) {
        updated.push(item);
      }
    });

    // Save enrolled courses
    localStorage.setItem("enrolled_courses", JSON.stringify(updated));

    alert("Payment successful! You are now enrolled.");

    // Redirect to student dashboard
    navigate("/payment");

  };

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-10">
            <p className="text-xl font-semibold mb-3">
              Your cart is empty 🛒
            </p>
            <p className="text-gray-600">
              Add courses to see them here.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow p-6 text-left">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b py-4 flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-14 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.duration}
                  </p>
                </div>
                <span className="font-semibold text-indigo-600">
                  {item.price}
                </span>
              </div>
            ))}

            {/* CENTERED PAYMENT BUTTON */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handlePayment}
                className="px-10 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
