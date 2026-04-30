import User from "../models/User.js";

// Get all users (for assignment dropdown)
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};