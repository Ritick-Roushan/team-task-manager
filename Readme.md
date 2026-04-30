 🚀 Team Task Manager (Full-Stack)

A modern full-stack web application that allows teams to **create projects, assign tasks, and track progress** with **role-based access control (Admin & Member)**.

---

 📌 Overview

The **Team Task Manager** is designed to simulate a real-world team collaboration system where:

* Admins manage projects and assign tasks
* Members work on assigned tasks and update progress
* Tasks are tracked with statuses and deadlines

This project demonstrates **full-stack development skills**, including authentication, API design, and role-based authorization.

---

 ✨ Features

 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure API access with token validation

---

 👥 Role-Based Access Control

 👑 Admin

* Create & delete projects
* Create, assign, and delete tasks
* View all tasks across users

 👤 Member

* View assigned tasks only
* Update task status (To Do → In Progress → Done)

---

 📁 Project Management

* Create multiple projects
* View all projects (shared visibility)
* Delete projects (Admin only)

---

 📝 Task Management

* Create tasks with:

  * Title
  * Description
  * Project
  * Assigned user
  * Due date
* Assign tasks to any team member
* Track status updates
* Delete tasks (Admin only)

---

 📊 Dashboard

* View all tasks (Admin)
* View assigned tasks (Member)
* Track progress and deadlines

---

 🌐 Landing Page

* Professional homepage with:

  * Header & navigation
  * Hero section
  * Features overview
  * Footer

---

 🛠️ Tech Stack

 Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router

 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

 📂 Folder Structure

```
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
```

   ⚙️ Installation & Setup

 1️⃣ Clone Repository

```bash
git clone https://github.com/Ritick-Roushan/team-task-manager.git
cd team-task-manager
```

---

 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

 3️⃣ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

 🔑 API Highlights

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /api/auth/register | Register user          |
| POST   | /api/auth/login    | Login user             |
| GET    | /api/projects      | Get all projects       |
| POST   | /api/projects      | Create project (Admin) |
| DELETE | /api/projects/:id  | Delete project (Admin) |
| GET    | /api/tasks         | Get tasks (role-based) |
| POST   | /api/tasks         | Create task (Admin)    |
| PUT    | /api/tasks/:id     | Update task status     |
| DELETE | /api/tasks/:id     | Delete task (Admin)    |
| GET    | /api/users         | Get all users          |

---

 🔒 Security Features

* JWT Authentication
* Protected Routes (Frontend & Backend)
* Role-based API restrictions
* Secure password hashing

---

 🎯 Key Highlights

* ✔ Full-stack architecture
* ✔ Clean REST API design
* ✔ Role-based authorization (RBAC)
* ✔ Real-world task assignment logic
* ✔ Responsive UI with Tailwind

---

 🚀 Deployment

* Frontend + Backend deployed on **Railway**
* Fully functional live application

---

 📌 Future Improvements

* Notifications system
* Team invitations
* File attachments
* Advanced dashboard analytics
* Drag & drop task board

---

  🙌 Conclusion

This project demonstrates a **complete production-level workflow**, including:

* Authentication & Authorization
* API development
* Frontend integration
* Real-world business logic

---

  👤 Author

Ritick Roushan
Full Stack Developer

---

⭐ If you like this project, consider giving it a star!
