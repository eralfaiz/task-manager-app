🚀 Task Manager Application

This project contains:

Frontend → React
Backend → Node.js + Express
Database → MongoDB

📁 Project Structure

project-root/
│
├── frontend/Task-Manager      # React App
├── backend/                   # Node.js API
└── README.md

⚙️ Backend Setup

1️⃣ Navigate to backend folder

cd backend

2️⃣ Install dependencies

npm install

3️⃣ Create Environment File

Create a file named: .env

4️⃣ Add the following variables inside .env

# Server Configuration
PORT=8000

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_here

# Admin
ADMIN_INVITE_TOKEN=4588944

⚠️ Replace it with your actual values.

your_mongodb_connection_string
your_jwt_secret_here

5️⃣ Start Backend Server

npm run dev

💻 Frontend Setup

1️⃣ Navigate to frontend/Task-Manager folder

cd frontend/Task-Manager

2️⃣ Install dependencies

npm install

3️⃣ Start React App

npm run dev

🔐 Environment Variables Explanation

| Variable           | Description                           |
| ------------------ | ------------------------------------- |
| PORT               | Backend server port                   |
| MONGO_URI          | MongoDB connection string             |
| JWT_SECRET         | Secret key for authentication         |
| ADMIN_INVITE_TOKEN | Token required for admin registration |

🛡️ Security Notice

Do not commit .env file to GitHub.
Always keep secrets private.
Use .env.example for sharing environment structure.


