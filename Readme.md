🚀 Team Task Manager (Full-Stack)

🌐 Live Application:
https://resilient-nourishment-production-cac2.up.railway.app/

(API connected to deployed backend)

---

📌 Overview

The Team Task Manager is a full-stack web application that enables teams to manage projects, assign tasks, and track progress using role-based access control (Admin & Member).

It simulates a real-world collaboration system where:

* Admins create and manage projects
* Tasks are assigned to team members
* Members update task progress
* Work is tracked using status and deadlines

---

✨ Key Features

🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure API access with protected routes

👥 Role-Based Access Control

👑 Admin:

* Create & delete projects
* Create, assign, and delete tasks
* View all tasks across users

👤 Member:

* View assigned tasks only
* Update task status (To Do → In Progress → Done)

---

📁 Project Management

* Create and manage multiple projects
* Shared visibility across users
* Delete projects (Admin only)

📝 Task Management

* Create tasks with:

  * Title, Description
  * Project association
  * Assigned user
  * Due date
* Assign tasks to team members
* Track task status updates
* Delete tasks (Admin only)

📊 Dashboard

* Admin: View all tasks
* Member: View assigned tasks
* Track progress and deadlines

🌐 Landing Page

* Clean UI with navigation, features overview, and footer

---

🛠️ Tech Stack

Frontend:

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router

Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

📂 Project Structure

Frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   └── App.jsx

Backend/
├── controllers/
├── models/
├── routes/
├── middleware/
└── server.js

---

⚙️ Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/Ritick-Roushan/team-task-manager.git
cd team-task-manager

---

2️⃣ Backend Setup

cd Backend
npm install

Create a .env file:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CORS_ORIGIN=your_cors_origin

Run backend:

npm run dev

---

3️⃣ Frontend Setup

cd Frontend
npm install
npm run dev

---

🔑 API Endpoints

POST   /api/auth/register   → Register user
POST   /api/auth/login      → Login user
GET    /api/projects        → Get all projects
POST   /api/projects        → Create project (Admin)
DELETE /api/projects/:id    → Delete project (Admin)
GET    /api/tasks           → Get tasks (role-based)
POST   /api/tasks           → Create task (Admin)
PUT    /api/tasks/:id       → Update task status
DELETE /api/tasks/:id       → Delete task (Admin)
GET    /api/users           → Get all users

---

🔒 Security Features

* JWT Authentication
* Protected routes (frontend & backend)
* Role-based authorization (RBAC)
* Password hashing using bcrypt

---

🚀 Deployment

* Frontend and Backend deployed on Railway
* Fully functional live application

Backend API:
https://team-task-manager-production-0f5a.up.railway.app

---

🎯 Key Highlights

* Full-stack architecture (React + Node + MongoDB)
* Clean REST API design
* Role-based access control system
* Real-world task management workflow
* Responsive UI using Tailwind CSS

---

📌 Future Enhancements

* Notification system
* Team invitations
* File attachments
* Advanced analytics dashboard
* Drag-and-drop task board

---

🙌 Conclusion

This project demonstrates a complete end-to-end development workflow including:

* Authentication & Authorization
* Backend API design
* Frontend integration
* Real-world business logic

---

👤 Author

Ritick Roushan
Full Stack Developer

---

⭐ Thank you for reviewing this project!
