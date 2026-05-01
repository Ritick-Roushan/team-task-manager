import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-production-0f5a.up.railway.app/api/"
  // baseURL: "http://localhost:5000/api/"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN SENT:", token);

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;