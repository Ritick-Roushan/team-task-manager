import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    createdBy: req.user._id,
    members: [req.user._id]
  });

  res.json(project);
};

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    res.json({ msg: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};