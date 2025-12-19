import { Link } from "react-router-dom";
import courseData from "../data/courseData";

export default function Courses() {
  return (
    <section id="courses" className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-3xl md:text-4xl font-extrabold text-center
          text-indigo-700 mb-10 tracking-tight"
        >
          Our Courses
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg
              transition p-4 flex flex-col"
            >
              {/* IMAGE comment */}
              <div className="h-36 mb-4 overflow-hidden rounded-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* COURSE NAME – FONT STYLE IMPROVED */}
              <h3
                className="text-[15px] font-semibold tracking-wide
                text-indigo-700 mb-2 leading-snug"
              >
                {course.title}
              </h3>

              {/* START DATE */}
              <p className="text-xs text-gray-500 mb-1 font-medium tracking-wide">
                Starts on{" "}
                <span className="text-gray-700 font-semibold">
                  {course.startDate}
                </span>
              </p>

              {/* PRICE */}
              <p className="text-purple-700 font-bold text-sm mb-4 tracking-wide">
                {course.price}
              </p>

              {/* ENROLL BUTTON */}
              <Link
                to={`/course/${course.id}`}
                className="mt-auto text-center
                border-2 border-indigo-700 text-indigo-700
                py-2 rounded-lg text-sm font-semibold
                tracking-wide
                hover:bg-indigo-700 hover:text-white
                transition"
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
