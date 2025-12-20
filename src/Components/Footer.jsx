export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            EduPrime
          </h2>
          <p className="text-sm leading-relaxed">
            EduPrime is a modern e-learning platform helping learners gain
            real-world skills through industry-ready courses and expert
            guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#register" className="hover:text-white">Register</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Popular Courses
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Full Stack Development</li>
            <li>Artificial Intelligence</li>
            <li>Cyber Security</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Chennai, India</li>
            <li>support@learnix.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-5 sm:py-6 text-center text-xs sm:text-sm px-4">
        © 2025 <span className="font-semibold text-white">EduPrime</span>.  
        Built with  using React & Tailwind CSS.
      </div>
    </footer>
  );
}
