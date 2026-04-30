import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
          T
        </div>
        <h1 className="text-2xl font-bold text-gray-900">TeamTask</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-700">{user?.name}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500 capitalize">{user?.role}</span>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 text-sm font-medium rounded-2xl transition-all active:scale-95"
        >
          Logout
        </button>
      </div>
    </div>
  );
}