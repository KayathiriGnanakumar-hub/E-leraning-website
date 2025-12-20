import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/courseData";
import { getCartItems, setCartItems } from "../utils/cartStorage";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courseData.find((c) => c.id === id);
  if (!course) return <p className="pt-28 text-center">Course not found</p>;

  const addToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const user = JSON.parse(localStorage.getItem("user"));

    // 🔐 AUTH CHECK (AS REQUIRED)
    if (!isLoggedIn || !user) {
      localStorage.setItem("pending_course", course.id);
      alert("Please register and login before adding to cart");
      navigate("/#register");
      return;
    }

    const cart = getCartItems();
    setCartItems([...cart, course]);

    alert("Course added to cart");
    navigate("/cart");
  };

  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* COURSE IMAGE */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {course.title}
        </h1>

        {/* RATING + DURATION */}
        <p className="text-sm text-gray-600 mb-3">
          ⭐ {course.rating} • {course.duration}
        </p>

        {/* START DATE */}
        <p className="text-sm text-gray-700 mb-1">
          <strong>Start Date:</strong> {course.startDate}
        </p>

        {/* SEATS */}
        <p className="text-sm text-gray-700 mb-4">
          <strong>Seats Available:</strong> {course.seats}
        </p>

        {/* COURSE SCOPE */}
        <p className="text-gray-700 mb-6">
          {course.scope}
        </p>

        {/* HIGHLIGHTS */}
        <h3 className="font-semibold text-lg mb-2 text-indigo-700">
          Course Highlights
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {course.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        {/* REVIEWS */}
        <h3 className="font-semibold text-lg mb-2 text-indigo-700">
          Student Reviews
        </h3>
        <ul className="mb-8 text-gray-700">
          {course.reviews.map((review, index) => (
            <li key={index}>• {review}</li>
          ))}
        </ul>

        {/* PRICE + ADD TO CART */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl font-bold text-purple-700">
            {course.price}
          </span>

          <button
            onClick={addToCart}
            className="px-10 py-3 rounded-lg border-2 border-indigo-600
            text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
}
