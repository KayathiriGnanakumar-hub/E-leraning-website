import { useParams, useNavigate } from "react-router-dom";
import courseData from "../data/courseData";
import { getCartItems, setCartItems } from "../utils/cartStorage";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.find((c) => c.id === id);

  if (!course) return <p>Course not found</p>;

  const addToCart = () => {
    const cart = getCartItems();
    const alreadyAdded = cart.some((item) => item.id === course.id);

    if (!alreadyAdded) {
      setCartItems([...cart, course]);
      alert("Course added to cart");
    } else {
      alert("Course already in cart");
    }

    navigate("/cart");
  };

  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-sm text-gray-600 mb-2">
          ⭐ {course.rating} | {course.duration}
        </p>

        <p className="text-sm mb-2">
          <strong>Start Date:</strong> {course.startDate}
        </p>

        <p className="text-sm mb-4">
          <strong>Seats Available:</strong> {course.seats}
        </p>

        <h3 className="font-semibold mb-2">Highlights</h3>
        <ul className="list-disc list-inside mb-4 text-sm">
          {course.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <p className="text-sm mb-4">{course.scope}</p>

        <h3 className="font-semibold mb-2">Student Reviews</h3>
        <ul className="text-sm mb-6">
          {course.reviews.map((r, i) => (
            <li key={i}>• {r}</li>
          ))}
        </ul>

        {/* CENTERED ADD TO CART */}
        <div className="flex justify-center">
          <button
            onClick={addToCart}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
