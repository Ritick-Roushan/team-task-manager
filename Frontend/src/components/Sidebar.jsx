import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-6 flex flex-col border-r border-gray-800">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
          T
        </div>
        <h2 className="text-2xl font-bold">TeamTask</h2>
      </div>

      <nav className="flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
        >
          📊 Dashboard
        </Link>
        <Link
          to="/projects"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
        >
          📁 Projects
        </Link>
        <Link
          to="/tasks"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
        >
          ✅ Tasks
        </Link>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800 text-xs text-gray-500">
        © 2026 TeamTask
      </div>
    </div>
  );
}