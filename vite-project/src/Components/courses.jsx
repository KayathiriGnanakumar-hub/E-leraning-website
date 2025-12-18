import dbms from "../assets/dbms.jpg";
import devops from "../assets/devops.jpg";
import dsa from "../assets/dsa.jpg";
import java from "../assets/java.jpg";
import jquery from "../assets/jquery.jpg";
import js from "../assets/js.jpg";
import ml from "../assets/ml.jpg";
import mobile from "../assets/mobile.jpg";
import python from "../assets/python.jpg";
import reactImg from "../assets/reactImg.jpg"
import ui from "../assets/ui.jpg";
import backend from "../assets/backend.jpg";
import cloud from "../assets/cloud.jpg";
import angular from "../assets/angular.jpg";
import cyber from "../assets/cyber.jpg";
import test from "../assets/test.jpg";

const courses = [
  { title: "DBMS", image: dbms, price: "₹499" },
  { title: "DevOps", image: devops, price: "₹699" },
  { title: "DSA", image: dsa, price: "₹599" },
  { title: "Java", image: java, price: "₹499" },
  { title: "jQuery", image: jquery, price: "₹399" },
  { title: "JavaScript", image: js, price: "₹499" },
  { title: "Machine Learning", image: ml, price: "₹799" },
  { title: "Mobile Development", image: mobile, price: "₹699" },
  { title: "Python", image: python, price: "₹499" },
  { title: "React", image: reactImg, price: "₹599" },
  { title: "UI / UX", image: ui, price: "₹399" },
  { title: "Backend Development", image: backend, price: "₹599" },
  { title: "Cloud Computing", image: cloud, price: "₹699" },
  { title: "Angular", image: angular, price: "₹599" },
  { title: "Cyber Security", image: cyber, price: "₹699" },
  { title: "Software Testing", image: test, price: "₹499" },


];

export default function Courses() {
  return (
    <div id="courses">
      {/* PAGE TITLE */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Our Courses
        </h1>
      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <div className="h-32 sm:h-36 mb-3 overflow-hidden rounded-md">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-sm font-semibold mb-1 flex-grow">
              {course.title}
            </h3>

            <p className="text-purple-700 text-sm mb-3">
              {course.price}
            </p>

            <button className="w-full bg-purple-700 text-white py-2 rounded-md text-sm hover:bg-purple-800 transition">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
