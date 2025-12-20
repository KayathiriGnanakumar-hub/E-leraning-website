import { NavLink } from "react-router-dom";

const linkClass =
  "block px-4 py-2 rounded-lg font-medium transition hover:bg-indigo-100 hover:text-indigo-700";

const activeClass =
  "bg-indigo-600 text-white";

export default function StudentSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg hidden md:block">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-indigo-600">
          Student Panel
        </h2>
        <p className="text-sm text-gray-500">
          Learning Dashboard
        </p>
      </div>

      <nav className="p-4 space-y-2">
        <NavLink
          to="/students"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/students/courses"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          My Courses
        </NavLink>

        <NavLink
          to="/students/progress"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Progress
        </NavLink>

        <NavLink
          to="/students/certificates"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Certificates
        </NavLink>

        <NavLink
          to="/students/internships"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Internships
        </NavLink>
      </nav>
    </aside>
  );
}
