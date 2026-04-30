import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "done").length;
  const overdue = tasks.filter(
    t => new Date(t.dueDate) < new Date() && t.status !== "done"
  ).length;

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium">Total Tasks</h3>
              <p className="text-4xl font-bold text-gray-900 mt-3">{total}</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-green-700 text-sm font-medium">Completed</h3>
              <p className="text-4xl font-bold text-green-700 mt-3">{completed}</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-red-700 text-sm font-medium">Overdue</h3>
              <p className="text-4xl font-bold text-red-700 mt-3">{overdue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}