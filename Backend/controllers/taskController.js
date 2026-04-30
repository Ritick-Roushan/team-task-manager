import Task from "../models/Task.js";

// CREATE TASK (Admin only ideally)
export const createTask = async (req, res) => {
  const { title, description, project, assignedTo, dueDate } = req.body;

  if (!title || !project || !assignedTo || !dueDate) {
    return res.status(400).json({ msg: "Missing fields" });
  }

  const task = await Task.create({
    title,
    description,
    project,
    assignedTo,
    dueDate
  });

  res.json(task);
};

// GET TASKS
export const getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find()
        .populate("assignedTo", "name email")   // 🔥 FIX
        .populate("project", "name");
    } else {
      tasks = await Task.find({ assignedTo: req.user._id })
        .populate("assignedTo", "name email")   // 🔥 FIX
        .populate("project", "name");
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// UPDATE TASK
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
};


export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    // 🔒 Only admin can delete ANY task
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Admin only" });
    }

    await Task.findByIdAndDelete(req.params.id);

    res.json({ msg: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};