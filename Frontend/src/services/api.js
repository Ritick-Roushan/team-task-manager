import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-production-0f5a.up.railway.app/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN SENT:", token); // 🔥 DEBUG

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;