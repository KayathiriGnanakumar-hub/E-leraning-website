import contactImg from "../assets/contact.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"   // ✅ FIX: added id ONLY
      className="bg-[#F5F3FF] px-6 py-10 min-h-screen"
    >

      {/* PAGE TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-1">
          Get in Touch
        </h1>
        <p className="text-slate-600 text-sm">
          Have questions about courses or enrollment? We’re here to help.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-9 items-stretch">

          {/* LEFT */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
            <img
              src={contactImg}
              alt="Contact E-LearnHub"
              className="w-full max-w-[250px] md:max-w-[260px]
              mx-auto mb-4 rounded-lg shadow ring-1 ring-purple-200"
            />

            <div className="border-t pt-4 border-purple-100 pl-12">
              <div className="flex items-start gap-3 mb-3">
                <FaMapMarkerAlt className="text-purple-600 text-sm mt-3" />
                <p className="text-slate-900 text-xs">
                  <strong>Address</strong><br />
                  E-LearnHub Learning Center, Chennai
                </p>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <FaEnvelope className="text-purple-600 text-sm mt-3" />
                <p className="text-slate-900 text-xs">
                  <strong>Support</strong><br />
                  support@elearnhub.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-purple-600 text-sm mt-3" />
                <p className="text-slate-900 text-xs">
                  <strong>Contact</strong><br />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-5">
                Contact Form
              </h2>

              <input className="w-full border rounded-md px-3 py-2 mb-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name" />

              <input className="w-full border rounded-md px-3 py-2 mb-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email" />

              <textarea className="w-full border rounded-md px-3 py-2 mb-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message" rows="3" />
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-600
            text-white w-full py-2 rounded-md text-sm font-medium shadow hover:shadow-md">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
