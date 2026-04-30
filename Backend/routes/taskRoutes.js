import express from "express";
import {
  createTask,
  getTasks,
  updateTask
} from "../controllers/taskController.js";

import { protect, isAdmin } from "../middleware/authMiddleware.js";

import { deleteTask } from "../controllers/taskController.js";

const router = express.Router();

// 🔒 Only admin can create task
router.post("/", protect, isAdmin, createTask);

// Users can see their tasks
router.get("/", protect, getTasks);

// Users can update their task status
router.put("/:id", protect, updateTask);

router.delete("/:id", protect, deleteTask);

export default router;