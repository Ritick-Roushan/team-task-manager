import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("PROJECT FETCH ERROR:", err.response?.data);
        setError("Failed to load projects");
      }
    };

    fetchProjects();
  }, []);

  const createProject = async () => {
    if (!name.trim()) return;
    try {
      const res = await API.post("/projects", { name });
      setProjects([...projects, res.data]);
      setName("");
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating project");
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting project");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <div className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>

          {error && (
            <p className="text-red-500 bg-red-50 p-3 rounded-2xl mb-6">{error}</p>
          )}

          {user?.role === "admin" && (
            <div className="bg-white border border-gray-200 rounded-3xl p-6 mb-8 flex gap-3">
              <input
                value={name}
                className="flex-1 border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-500"
                placeholder="Enter new project name"
                onChange={(e) => setName(e.target.value)}
              />
              <button
                onClick={createProject}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-medium transition"
              >
                Add Project
              </button>
            </div>
          )}

          <div className="space-y-3">
            {projects.length > 0 ? (
              projects.map(p => (
                <div
                  key={p._id}
                  className="bg-white border border-gray-200 rounded-3xl p-5 flex justify-between items-center hover:shadow-sm transition"
                >
                  <span className="text-lg font-medium text-gray-800">{p.name}</span>

                  {user?.role === "admin" && (
                    <button
                      onClick={() => deleteProject(p._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 text-sm rounded-2xl transition"
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-10">No projects found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}