import { Outlet } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";

export default function StudentLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <StudentSidebar />

      <main className="flex-1 p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
