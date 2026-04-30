import express from "express";
import { createProject, getProjects } from "../controllers/projectController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { deleteProject } from "../controllers/projectController.js";


const router = express.Router();

// 🔒 Only admin can create project
router.post("/", protect, isAdmin, createProject);

// Everyone logged in can view
router.get("/", protect, getProjects);

// 🔒 Only admin can delete
router.delete("/:id", protect, isAdmin, deleteProject);

export default router;