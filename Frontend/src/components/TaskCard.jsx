export default function TaskCard({ task, onStatusChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-md transition-all duration-200">
      <h3 className="font-semibold text-lg text-gray-900 mb-2">
        {task.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {task.description}
      </p>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-500">Project</span>
          <span className="font-medium text-gray-700">
            {task.project?.name || "N/A"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Assigned to</span>
          <span className="font-medium text-gray-700">
            {task.assignedTo?._id === JSON.parse(localStorage.getItem("user"))?._id
              ? "You"
              : task.assignedTo?.name || "N/A"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Due Date</span>
          <span className="font-medium text-gray-700">
            {task.dueDate?.slice(0, 10) || "No due date"}
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task._id, e.target.value)}
          className="w-full bg-gray-50 border border-gray-300 text-sm font-medium rounded-2xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
}