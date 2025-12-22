import { useNavigate } from "react-router-dom";
import { getCartItems, clearCart } from "../utils/cartStorage";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const cartItems = getCartItems();
  const [loading, setLoading] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")),
    0
  );

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      // Enroll courses
      const enrolled =
        JSON.parse(localStorage.getItem("enrolled_courses")) || [];

      const updated = [...enrolled];
      cartItems.forEach((item) => {
        if (!updated.some((c) => c.id === item.id)) {
          updated.push({ ...item, progress: 0 });
        }
      });

      localStorage.setItem("enrolled_courses", JSON.stringify(updated));
      clearCart();

      setLoading(false);
      navigate("/payment-success");
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <p className="pt-32 text-center text-gray-600">
        No items to pay for.
      </p>
    );
  }

  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold mb-6 text-indigo-700">
          Payment
        </h1>

        {/* ORDER SUMMARY */}
        <div className="mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-2"
            >
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>

        {/* PAYMENT BUTTON */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          {loading ? "Processing Payment..." : "Pay Now"}
        </button>
      </div>
    </section>
  );
}
