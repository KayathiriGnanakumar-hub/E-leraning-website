import contactImg from "../assets/contact.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#F5F3FF] px-6 py-12 min-h-screen pt-28"
      // 👆 pt-28 fixes navbar overlap
    >
      {/* PAGE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-purple-700 mb-2">
          Get in Touch
        </h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Have questions about our courses or enrollment?
          Our dedicated support team is always ready to help you.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-9 items-stretch">

          {/* LEFT */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col">
            <img
              src={contactImg}
              alt="Contact Learnix"
              className="w-full max-w-[250px] mx-auto mb-5 rounded-lg shadow ring-1 ring-purple-200"
            />

            <div className="border-t pt-4 border-purple-100 pl-4">
              <div className="flex items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-purple-600 mt-1" />
                <p className="text-slate-900 text-sm">
                  <strong>Address</strong><br />
                  Learnix Learning Center, Chennai
                </p>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <FaEnvelope className="text-purple-600 mt-1" />
                <p className="text-slate-900 text-sm">
                  <strong>Email</strong><br />
                  support@learnix.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-purple-600 mt-1" />
                <p className="text-slate-900 text-sm">
                  <strong>Phone</strong><br />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-bold text-purple-700 mb-5">
              Contact Form
            </h2>

            <input
              className="w-full border rounded-lg px-3 py-2 mb-3 text-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />

            <input
              className="w-full border rounded-lg px-3 py-2 mb-3 text-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email"
            />

            <input
              className="w-full border rounded-lg px-3 py-2 mb-3 text-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Your Phone Number"
            />

            <textarea
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message"
              rows="4"
            />

            <button
              className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600
              text-white w-full py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
