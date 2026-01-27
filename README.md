# 🎓 SMART-LEARN - Student Technology Platform

![SMART-LEARN Banner](https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 QUICK START

### 1-Click to Go Live (Get a URL)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/uravularajesh59-del/SMART-LEARN)

### Or Run Locally:

#### Windows Users
1. Clone this repository
2. Navigate to `StudentTechSystem` folder
3. **Double-click `START.bat`** - That's it! 🎉

### Mac/Linux Users
```bash
git clone https://github.com/uravularajesh59-del/SMART-LEARN.git
cd SMART-LEARN/StudentTechSystem
chmod +x start.sh
./start.sh
```

**Then open**: http://localhost:5000

📖 **Need help?** See [QUICKSTART.md](StudentTechSystem/QUICKSTART.md) for detailed instructions and troubleshooting.

---

## 📋 Overview

SMART-LEARN is a comprehensive e-learning platform designed to guide students in choosing and mastering the right technology path. The platform offers structured learning paths with video courses, assessments, and professional certificates in various technologies including Python, Web Development, Data Science, and Java.

## ✨ Features

- 🎥 **Video-Based Learning**: Curated YouTube video courses for each technology
- 📝 **Online Assessments**: Technology-specific quizzes to test knowledge
- 🏆 **Digital Certificates**: Beautiful, downloadable certificates upon course completion
- 👨‍🎓 **Student Management**: Complete student registration and tracking system
- 📊 **Admin Dashboard**: Monitor student progress and batch management
- 🎨 **Modern UI/UX**: Vibrant design with smooth animations and responsive layout
- 📱 **Mobile Responsive**: Works seamlessly on all devices

## 🚀 Technologies Used

### Backend
- **Flask** - Python web framework
- **SQLAlchemy** - Database ORM
- **SQLite** - Database

### Frontend
- **HTML5** & **CSS3**
- **JavaScript** (Vanilla)
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📦 Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/uravularajesh59-del/SMART-LEARN.git
   cd SMART-LEARN
   ```

2. **Navigate to the project directory**
   ```bash
   cd StudentTechSystem
   ```

3. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   ```

4. **Activate the virtual environment**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

5. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

6. **Run the application**
   ```bash
   python app.py
   ```

7. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎯 Usage Guide

### For Students

1. **Browse Courses**: Visit the homepage to explore available technology courses
2. **Register**: Click on a course and complete the registration form
3. **Watch Videos**: Access curated video content for your chosen technology
4. **Take Assessment**: Complete the online test after finishing the course
5. **Get Certified**: Download your certificate upon passing the assessment

### For Administrators

1. **Access Admin Dashboard**: Navigate to `/admin`
2. **View Students**: See all registered students organized by batch
3. **Track Progress**: Monitor test scores and certification status

## 📁 Project Structure

```
SMART-LEARN/
├── StudentTechSystem/
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css     # Main stylesheet
│   │   └── images/           # Image assets
│   └── templates/
│       ├── layout.html       # Base template
│       ├── index.html        # Homepage
│       ├── register.html     # Registration form
│       ├── course.html       # Course videos page
│       ├── test.html         # Assessment page
│       ├── result.html       # Test results
│       ├── certificate.html  # Certificate page
│       └── admin_dashboard.html
└── README.md
```

## 🎨 Design Features

- **Modern Color Scheme**: Vibrant cyan-blue (#06BBCC) primary color with complementary gradients
- **Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- **Glassmorphism**: Modern UI design patterns
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Premium Typography**: Google Fonts (Heebo, Nunito)

## 🏅 Certificate System

The platform generates beautiful, professional certificates featuring:
- Student name prominently displayed
- Course/technology completed
- Completion date
- Downloadable as PDF with student name in filename
- Print-friendly design

## 🔧 Configuration

### Database
The application uses SQLite by default. The database file (`database.db`) is created automatically on first run.

### Secret Key
For production deployment, update the secret key in `app.py`:
```python
app.config['SECRET_KEY'] = 'your-secure-secret-key-here'
```

## 🌐 Deployment

### Local Development
```bash
python app.py
```
The application runs on `http://localhost:5000` in debug mode.

### Production Deployment

For production deployment on platforms like Heroku, Railway, or PythonAnywhere:

1. Ensure `requirements.txt` is up to date
2. Set environment variables for production
3. Disable debug mode in `app.py`
4. Use a production WSGI server like Gunicorn

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Student Tech Team**

## 🙏 Acknowledgments

- Video content sourced from YouTube educational channels
- Images from Unsplash
- Icons from Font Awesome
- Inspired by modern e-learning platforms

## 📧 Contact

For questions or support, please contact: info@smart-learn.com

---

**Made with ❤️ for students by students**
