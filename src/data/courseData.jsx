import dbms from "../assets/dbms.jpg";
import devops from "../assets/devops.jpg";
import dsa from "../assets/dsa.jpg";
import java from "../assets/java.jpg";
import js from "../assets/js.jpg";
import reactImg from "../assets/reactImg.jpg";   // ⚠️ make sure filename is react.jpg
import python from "../assets/python.jpg";
import ml from "../assets/ml.jpg";
import ui from "../assets/ui.jpg";
import mobile from "../assets/mobile.jpg";
import cloud from "../assets/cloud.jpg";
import cyber from "../assets/cyber.jpg";
import angular from "../assets/angular.jpg";
import test from "../assets/test.jpg";
import backend from "../assets/backend.jpg";
import jquery from "../assets/jquery.jpg";

const courseData = [
  {
    id: "dbms",
    title: "DBMS",
    image: dbms,
    price: "₹499",
    rating: 4.5,
    duration: "6 Weeks",
    startDate: "15 Oct 2025",
    seats: 25,
    highlights: ["SQL & Normalization", "Indexing", "Transactions"],
    scope: "Backend, Full Stack, Database roles",
    reviews: ["Very clear explanation", "Best DBMS course"],
  },

  {
    id: "devops",
    title: "DevOps",
    image: devops,
    price: "₹699",
    rating: 4.7,
    duration: "8 Weeks",
    startDate: "20 Oct 2025",
    seats: 20,
    highlights: ["CI/CD", "Docker", "Kubernetes", "AWS"],
    scope: "Cloud & Automation roles",
    reviews: ["Industry oriented", "Excellent labs"],
  },

  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    image: dsa,
    price: "₹599",
    rating: 4.6,
    duration: "8 Weeks",
    startDate: "18 Oct 2025",
    seats: 30,
    highlights: ["Arrays", "Trees", "Graphs", "Problem Solving"],
    scope: "Product-based company interviews",
    reviews: ["Best for placements", "Well structured"],
  },

  {
    id: "java",
    title: "Java Programming",
    image: java,
    price: "₹499",
    rating: 4.4,
    duration: "6 Weeks",
    startDate: "16 Oct 2025",
    seats: 35,
    highlights: ["OOP", "Collections", "JVM"],
    scope: "Backend & Enterprise development",
    reviews: ["Clear concepts", "Good examples"],
  },

  {
    id: "javascript",
    title: "JavaScript",
    image: js,
    price: "₹499",
    rating: 4.5,
    duration: "6 Weeks",
    startDate: "17 Oct 2025",
    seats: 40,
    highlights: ["ES6+", "DOM", "Async JS"],
    scope: "Frontend & Full Stack roles",
    reviews: ["Very practical", "Easy to understand"],
  },

  {
    id: "react",
    title: "React",
    image: reactImg,
    price: "₹599",
    rating: 4.6,
    duration: "7 Weeks",
    startDate: "19 Oct 2025",
    seats: 30,
    highlights: ["Hooks", "Routing", "State Management"],
    scope: "Frontend & MERN stack roles",
    reviews: ["Modern approach", "Project based"],
  },

  {
    id: "python",
    title: "Python",
    image: python,
    price: "₹499",
    rating: 4.5,
    duration: "6 Weeks",
    startDate: "15 Oct 2025",
    seats: 45,
    highlights: ["Basics", "OOP", "Automation"],
    scope: "Data, Backend, Automation roles",
    reviews: ["Beginner friendly"],
  },

  {
    id: "ml",
    title: "Machine Learning",
    image: ml,
    price: "₹799",
    rating: 4.7,
    duration: "10 Weeks",
    startDate: "25 Oct 2025",
    seats: 20,
    highlights: ["Regression", "Classification", "Projects"],
    scope: "AI & Data Science roles",
    reviews: ["Very practical", "Good explanations"],
  },

  {
    id: "uiux",
    title: "UI / UX Design",
    image: ui,
    price: "₹399",
    rating: 4.3,
    duration: "5 Weeks",
    startDate: "14 Oct 2025",
    seats: 50,
    highlights: ["Figma", "User Research", "Wireframes"],
    scope: "Designer roles",
    reviews: ["Creative", "Easy learning"],
  },

  {
    id: "mobile",
    title: "Mobile App Development",
    image: mobile,
    price: "₹699",
    rating: 4.4,
    duration: "8 Weeks",
    startDate: "21 Oct 2025",
    seats: 25,
    highlights: ["Android Basics", "React Native"],
    scope: "Mobile developer roles",
    reviews: ["Good projects"],
  },

  {
    id: "cloud",
    title: "Cloud Computing",
    image: cloud,
    price: "₹699",
    rating: 4.5,
    duration: "7 Weeks",
    startDate: "23 Oct 2025",
    seats: 20,
    highlights: ["AWS", "Cloud Architecture"],
    scope: "Cloud engineer roles",
    reviews: ["Industry relevant"],
  },

  {
    id: "angular",
    title: "Angular",
    image: angular,
    price: "₹599",
    rating: 4.4,
    duration: "6 Weeks",
    startDate: "18 Oct 2025",
    seats: 30,
    highlights: ["Components", "Routing", "Services"],
    scope: "Enterprise frontend roles",
    reviews: ["Good structure"],
  },

  {
    id: "cyber",
    title: "Cyber Security",
    image: cyber,
    price: "₹799",
    rating: 4.8,
    duration: "10 Weeks",
    startDate: "25 Oct 2025",
    seats: 15,
    highlights: ["Ethical Hacking", "Network Security"],
    scope: "Security analyst roles",
    reviews: ["Hands-on", "Very practical"],
  },

  {
    id: "testing",
    title: "Software Testing",
    image: test,
    price: "₹399",
    rating: 4.3,
    duration: "5 Weeks",
    startDate: "22 Oct 2025",
    seats: 40,
    highlights: ["Manual Testing", "Automation Basics"],
    scope: "QA & Testing roles",
    reviews: ["Good for beginners"],
  },
  {
  id: "backend",
  title: "Backend Development",
  image: backend,
  price: "₹699",
  rating: 4.6,
  duration: "7 Weeks",
  startDate: "19 Oct 2025",
  seats: 30,
  highlights: ["Node.js", "APIs", "Database Integration"],
  scope: "Backend & Full Stack developer roles",
  reviews: ["Very practical", "Good real-world examples"],
},

{
  id: "jquery",
  title: "jQuery",
  image: jquery,
  price: "₹399",
  rating: 4.2,
  duration: "4 Weeks",
  startDate: "14 Oct 2025",
  seats: 45,
  highlights: ["DOM Manipulation", "Animations", "AJAX"],
  scope: "Frontend enhancement & legacy projects",
  reviews: ["Easy to learn", "Helpful for beginners"],
  }

];

export default courseData;
