# 🎓 Student Technology Guidance System

A modern, beautiful web application for student technology course enrollment, testing, and certification.

## ✨ Features

- **📚 Course Catalog** - Browse multiple technology tracks (Python, Web Dev, Data Science, Java)
- **📝 Student Registration** - Easy enrollment with automatic batch assignment
- **✅ Online Testing** - Technology-specific assessment tests
- **🏆 Digital Certificates** - Automatic certificate generation for successful students
- **👨‍💼 Admin Dashboard** - Manage students and track progress

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher

### Installation & Running

**Option 1: Using the Python Launcher (Recommended)**
```bash
python start.py
```

**Option 2: Manual Setup**
```bash
# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

**Option 3: Using run.bat (Windows)**
```bash
run.bat
```

The application will automatically:
- Install required dependencies
- Create the database
- Start the development server on http://127.0.0.1:5000

## 🎨 Design Features

- **Modern Gradient UI** - Beautiful purple-pink gradient backgrounds
- **Glassmorphism Effects** - Translucent cards with blur effects
- **Smooth Animations** - Slide-in, fade, and hover animations
- **Responsive Design** - Works perfectly on all devices
- **Premium Typography** - Inter and Poppins fonts for clean readability

## 📋 How to Use

### For Students:

1. **Browse Courses** - Visit the homepage to see available technologies with video introductions
2. **Register** - Click "Apply Now" on your desired course
3. **Take Test** - Navigate to "Take Test" and enter your roll number
4. **Get Certificate** - Score 2/3 or higher to receive your digital certificate

### For Administrators:

1. Visit `/admin` to see all registered students
2. View students grouped by technology and batch
3. Track test scores and certification status

## 🗂️ Project Structure

```
StudentTechSystem/
├── app.py                  # Flask application & routes
├── start.py                # Launcher script
├── requirements.txt        # Python dependencies
├── database.db            # SQLite database (auto-created)
├── static/
│   └── css/
│       └── style.css      # Premium UI styling
└── templates/
    ├── layout.html        # Base template
    ├── index.html         # Homepage
    ├── register.html      # Registration form
    ├── test_login.html    # Test login page
    ├── test.html          # Test page
    ├── result.html        # Test results
    ├── certificate.html   # Certificate page
    └── admin_dashboard.html  # Admin panel
```

## 🛠️ Technologies Used

- **Backend**: Flask, SQLAlchemy
- **Frontend**: HTML5, CSS3 (Custom Premium Design)
- **Database**: SQLite
- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: Font Awesome 6

## 📊 Database Schema

### Student Model
- ID (Primary Key)
- Name
- Roll Number (Unique)
- Email
- Mobile
- Date of Birth
- Technology
- Batch Group (Auto-assigned)
- Test Score
- Certification Status
- Registration Date

## 🎯 Test Criteria

- Each test contains 3 multiple-choice questions
- Passing score: 2 out of 3 (66.67%)
- Questions are technology-specific
- Certificate awarded upon passing

## 🔐 Security Notes

⚠️ **For Development Only** - This is a college project demo with:
- No authentication system
- Simple hardcoded admin access
- Development mode enabled
- No production security measures

For production deployment, add:
- User authentication
- Admin login system
- CSRF protection
- Environment variables for secrets
- Production WSGI server (Gunicorn/uWSGI)

## 📝 License

This is a college project created for educational purposes.

## 👥 Credits

Created as a Student Technology Guidance System demonstration project.

---

**Enjoy the app!** 🚀 Visit http://127.0.0.1:5000 after starting the server.
