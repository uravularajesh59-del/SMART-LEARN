# SMART-LEARN React + Node.js Full Stack Application

Complete modern web application built with React frontend and Node.js/Express backend.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install Backend Dependencies**
```bash
cd backend
npm install
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

### Running the Application

**Option 1: Development Mode (Recommended)**

Start backend and frontend separately:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

- Backend API: http://localhost:5000
- Frontend: http://localhost:3000

**Option 2: Production Build**

```bash
cd frontend
npm run build
npm run preview
```

## 📁 Project Structure

```
SmartLearn-React/
├── backend/
│   ├── server.js          # Express server & API routes
│   ├── package.json       # Backend dependencies
│   └── smartlearn.db      # SQLite database (auto-created)
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Register.jsx
    │   │   ├── TestLogin.jsx
    │   │   ├── Test.jsx
    │   │   ├── Result.jsx
    │   │   ├── Certificate.jsx
    │   │   └── AdminDashboard.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── public/
    │   └── logo.png
    ├── index.html
    ├── vite.config.js
    └── package.json

```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **better-sqlite3** - SQLite database
- **CORS** - Cross-origin resource sharing
- **body-parser** - Request body parsing

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Premium CSS** - Custom gradient design

### Database
- **SQLite** - Lightweight SQL database

## 📡 API Endpoints

### Technologies
- `GET /api/technologies` - Get all available technologies

### Students
- `POST /api/register` - Register new student
- `GET /api/student/:rollNumber` - Get student by roll number
- `GET /api/student/by-id/:id` - Get student by ID

### Tests
- `GET /api/test/:technology` - Get test questions for technology
- `POST /api/test/submit` - Submit test answers

### Admin
- `GET /api/admin/students` - Get all students with batch grouping

### Certificates
- `GET /api/certificate/:studentId` - Get certificate data

## ✨ Features

- **Course Catalog** - Browse 4 technology tracks with video intros
- **Registration System** - Easy enrollment with auto batch assignment
- **Testing Platform** - Technology-specific assessments
- **Certification** - Digital certificates for passing students
- **Admin Dashboard** - Student management and tracking
- **Premium UI** - Gradient design with glassmorphism effects

## 🎨 Design Features

- Modern gradient backgrounds (purple-pink theme)
- Glassmorphism cards with backdrop blur
- Smooth animations and transitions
- Responsive design for all devices
- Professional typography (Inter & Poppins fonts)

## 📝 Notes

- Frontend dev server proxies API calls to backend
- Database auto-creates on first backend start
- Passing score: 2/3 questions (66.67%)
- No authentication (demo/educational project)

## 🔧 Development Tips

**Hot Reload**
- Backend: Uses nodemon for auto-restart
- Frontend: Vite provides instant HMR

**Database Reset**
Simply delete `smartlearn.db` and restart backend.

**API Testing**
Use tools like Postman or Thunder Client to test API endpoints directly.

## 📦 Build for Production

```bash
cd frontend
npm run build
```

Built files will be in `frontend/dist/`

---

**Built with ❤️ using React + Node.js**
