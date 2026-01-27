# 🚀 QUICK START GUIDE

## ⚡ Fastest Way to Run (Windows)

**Just double-click**: `START.bat`

That's it! The script will automatically:
- ✅ Check Python installation
- ✅ Create virtual environment
- ✅ Install all dependencies
- ✅ Start the application

Then open your browser at: **http://localhost:5000**

---

## ⚡ Fastest Way to Run (Mac/Linux)

```bash
chmod +x start.sh
./start.sh
```

Then open your browser at: **http://localhost:5000**

---

## 📋 Manual Setup (If you prefer step-by-step)

### Prerequisites
- Python 3.8 or higher ([Download here](https://www.python.org/downloads/))
- pip (comes with Python)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/uravularajesh59-del/SMART-LEARN.git
   cd SMART-LEARN/StudentTechSystem
   ```

2. **Create virtual environment** (Recommended)
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # Mac/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open your browser**
   Navigate to: **http://localhost:5000**

---

## 🎯 What You'll See

### Homepage
- Beautiful gradient hero section
- Modern course cards with hover effects
- Smooth animations throughout

### Features to Test
1. **Register** - Click any course and fill the form
2. **Watch Videos** - View curated YouTube tutorials
3. **Take Test** - Answer quiz questions
4. **Get Certificate** - Download beautiful PDF certificate with your name!

---

## ❓ Troubleshooting

### "Python is not recognized"
- Install Python from [python.org](https://www.python.org/downloads/)
- Make sure to check "Add Python to PATH" during installation

### "pip is not recognized"
- Python 3.4+ includes pip by default
- Try: `python -m pip install -r requirements.txt`

### Port 5000 already in use
- Stop other applications using port 5000
- Or edit `app.py` and change the port:
  ```python
  app.run(debug=True, port=5001)
  ```

### Database errors
- Delete `database.db` file if it exists
- The app will create a fresh database on startup

---

## 🌐 Deployment

### For Production (Heroku, Railway, etc.)
The project is ready to deploy! It includes:
- ✅ `requirements.txt` - All dependencies listed
- ✅ `.gitignore` - Excludes unnecessary files
- ✅ Proper project structure

### Environment Variables
For production, set:
```
SECRET_KEY=your-secure-random-key-here
```

---

## 📞 Need Help?

If you encounter any issues:
1. Check that Python 3.8+ is installed: `python --version`
2. Ensure all dependencies are installed: `pip list`
3. Check the console for error messages
4. Make sure port 5000 is available

---

## ✨ Features

- 🎥 Video-based learning
- 📝 Online assessments
- 🏆 Beautiful downloadable certificates (with student names!)
- 👨‍🎓 Student management
- 📊 Admin dashboard
- 🎨 Modern UI with animations
- 📱 Mobile responsive

---

**Made with ❤️ for students**
