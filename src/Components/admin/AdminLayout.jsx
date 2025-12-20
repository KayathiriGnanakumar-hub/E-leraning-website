import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-indigo-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-4">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "block font-semibold text-indigo-300" : "block"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/courses"
            className={({ isActive }) =>
              isActive ? "block font-semibold text-indigo-300" : "block"
            }
          >
            Manage Courses
          </NavLink>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}
