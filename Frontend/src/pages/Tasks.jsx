import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    project: "",
    assignedTo: "",
    dueDate: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [taskRes, projectRes, userRes] = await Promise.all([
          API.get("/tasks"),
          API.get("/projects"),
          API.get("/users")
        ]);

        setTasks(taskRes.data);
        setProjects(projectRes.data);
        setUsers(userRes.data);
      } catch (err) {
        console.error("FETCH ERROR:", err.response?.data);
        setError("Failed to load data");
      }
    };

    fetchData();
  }, []);

  const addTask = async () => {
    if (!form.title || !form.project || !form.assignedTo || !form.dueDate) {
      return alert("Fill all fields");
    }

    try {
      const res = await API.post("/tasks", form);
      setTasks([...tasks, res.data]);

      setForm({
        title: "",
        description: "",
        project: "",
        assignedTo: "",
        dueDate: ""
      });
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating task");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await API.put(`/tasks/${id}`, { status });
      setTasks(tasks.map(t => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error("UPDATE ERROR:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting task");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <div className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tasks</h2>

          {error && (
            <p className="text-red-500 bg-red-50 p-3 rounded-2xl mb-6">{error}</p>
          )}

          {/* Create Task Form - Admin Only */}
          {user?.role === "admin" && (
            <div className="bg-white border border-gray-200 rounded-3xl p-6 mb-10">
              <h3 className="font-semibold text-lg mb-4">Create New Task</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={form.title}
                  placeholder="Task Title"
                  className="border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500"
                  onChange={e => setForm({ ...form, title: e.target.value })}
                />

                <input
                  type="date"
                  value={form.dueDate}
                  className="border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500"
                  onChange={e => setForm({ ...form, dueDate: e.target.value })}
                />

                <select
                  value={form.project}
                  className="border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500"
                  onChange={e => setForm({ ...form, project: e.target.value })}
                >
                  <option value="">Select Project</option>
                  {projects.map(p => (
                    <option key={p._id} value={p._id}>{p.name}</option>
                  ))}
                </select>

                <select
                  value={form.assignedTo}
                  className="border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500"
                  onChange={e => setForm({ ...form, assignedTo: e.target.value })}
                >
                  <option value="">Assign to User</option>
                  {users.map(u => (
                    <option key={u._id} value={u._id}>
                      {u.name} ({u.role})
                    </option>
                  ))}
                </select>

                <input
                  value={form.description}
                  placeholder="Description (optional)"
                  className="border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500 md:col-span-2"
                  onChange={e => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <button
                onClick={addTask}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-medium transition"
              >
                Create Task
              </button>
            </div>
          )}

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map(t => (
              <div key={t._id} className="relative">
                <TaskCard task={t} onStatusChange={updateStatus} />

                {user?.role === "admin" && (
                  <button
                    onClick={() => deleteTask(t._id)}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-xl transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>

          {tasks.length === 0 && (
            <p className="text-gray-500 text-center py-10">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
}