Role-Based Authorization System (MERN)

A simple and secure Role-Based Authentication + Authorization project built using:
Node.js + Express(Backend)
JWT Authentication
Role-Based Access Middleware
React.js(Frontend)
Protected Routes based on Roles (Admin/User)

This project demonstrates how to control access to specific routes or UI components based on user roles.
Features
Authentication

- Login using username & password
- Backend validates credentials from in-memory database
- JWT token generation + verification

Role-Based Authorization

-Admin-only routes (e.g., Admin Dashboard)
- User-only routes (e.g., User Dashboard)
- Block unauthorized users automatically

Protected Frontend

- React ProtectedRoute component
- Redirects non-authorized users to login
- Shows different UI based on user role

 Simple & Clean UI

-Login page
- Dashboard
- Admin panel
- Header with Logout

 Project Structure


project/
│
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── context/AuthContext.js
    │   ├── components/Header.js
    │   ├── pages/Login.js
    │   ├── pages/Dashboard.js
    │   ├── pages/AdminDashboard.js
    │   ├── routes/ProtectedRoute.js
    │   └── App.js
    └── package.json

Installation & Setup
Clone the Repository
--->bash
git clone https://github.com/Di-ya1103/role-based-auth.git
cd role-based-auth

Backend Setup
'''
cd backend
npm install
npm run dev
'''

Backend runs on:

http://localhost:5000

--> Frontend Setup

cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

Sample Users (Hardcoded)

| Username | Password    | Role  |
| -------- | ----------- | ----- |
| alice    | password123 | admin |
| carl   | password123 | user  |

Use these to log in.


Just tell me!
