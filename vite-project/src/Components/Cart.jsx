import { Link } from "react-router-dom";
import { getCartItems } from "../utils/cartStorage";

export default function Cart() {
  const cartItems = getCartItems();

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
            <p className="text-gray-600 mb-6">
              Add courses to see them here.
            </p>

            <Link
              to="/"
              className="inline-block px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow p-6 text-left">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border-b py-4 flex justify-between"
              >
                <span className="font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
