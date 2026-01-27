# 🔧 TROUBLESHOOTING GUIDE - SMART-LEARN

## ✅ Repository Status: FIXED AND WORKING!

**Latest Update**: Requirements.txt updated with flexible version constraints for better compatibility.

---

## 🚀 VERIFIED WORKING SETUP

### What I Just Fixed:
- ✅ Updated `requirements.txt` to use `>=` instead of `==` for version flexibility
- ✅ Tested locally - Application runs successfully
- ✅ Pushed fixes to GitHub
- ✅ Repository URL: https://github.com/uravularajesh59-del/SMART-LEARN

---

## 📋 Step-by-Step: How to Run from GitHub

### For Windows Users (EASIEST METHOD):

```bash
# Step 1: Clone the repository
git clone https://github.com/uravularajesh59-del/SMART-LEARN.git

# Step 2: Navigate to the folder
cd SMART-LEARN\StudentTechSystem

# Step 3: Double-click START.bat
# (Or run it from command line)
START.bat
```

### For Mac/Linux Users:

```bash
# Step 1: Clone
git clone https://github.com/uravularajesh59-del/SMART-LEARN.git

# Step 2: Navigate
cd SMART-LEARN/StudentTechSystem

# Step 3: Make executable and run
chmod +x start.sh
./start.sh
```

### Manual Method (All Platforms):

```bash
# 1. Clone
git clone https://github.com/uravularajesh59-del/SMART-LEARN.git
cd SMART-LEARN/StudentTechSystem

# 2. Create virtual environment
python -m venv venv

# 3. Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run the application
python app.py
```

**Then open your browser**: http://localhost:5000

---

## ❌ Common Issues and Solutions

### Issue 1: "Python is not recognized"

**Symptoms:**
```
'python' is not recognized as an internal or external command
```

**Solution:**
1. Install Python 3.8 or higher from [python.org](https://www.python.org/downloads/)
2. **IMPORTANT**: Check "Add Python to PATH" during installation
3. Restart your terminal/command prompt
4. Verify: `python --version`

---

### Issue 2: "No module named 'flask'"

**Symptoms:**
```
ModuleNotFoundError: No module named 'flask'
```

**Solution:**
```bash
# Make sure you're in the StudentTechSystem folder
cd SMART-LEARN/StudentTechSystem

# Install dependencies
pip install -r requirements.txt

# If pip doesn't work, try:
python -m pip install -r requirements.txt
```

---

### Issue 3: "Address already in use" or "Port 5000 in use"

**Symptoms:**
```
OSError: [Errno 48] Address already in use
```

**Solution Option 1** - Stop the other process:
- **Windows**: Open Task Manager → Find Python → End Task
- **Mac/Linux**: `lsof -ti:5000 | xargs kill`

**Solution Option 2** - Use different port:
1. Open `app.py`
2. Find the last line: `app.run(debug=True)`
3. Change to: `app.run(debug=True, port=5001)`
4. Access at: http://localhost:5001

---

### Issue 4: "Permission denied" (Mac/Linux)

**Symptoms:**
```
Permission denied: './start.sh'
```

**Solution:**
```bash
chmod +x start.sh
./start.sh
```

---

### Issue 5: Virtual Environment Issues

**Symptoms:**
- Can't activate venv
- Commands not found after activation

**Solution:**
```bash
# Delete old venv
rm -rf venv  # Mac/Linux
rmdir /s venv  # Windows

# Create fresh venv
python -m venv venv

# Activate
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt
```

---

### Issue 6: Database Errors

**Symptoms:**
```
sqlite3.OperationalError: unable to open database file
```

**Solution:**
```bash
# Delete the database file (it will be recreated)
# Windows:
del database.db
# Mac/Linux:
rm database.db

# Run the app again
python app.py
```

---

### Issue 7: "git: command not found"

**Symptoms:**
```
'git' is not recognized as an internal or external command
```

**Solution:**
1. Install Git from [git-scm.com](https://git-scm.com/downloads)
2. Restart terminal
3. Verify: `git --version`

**Alternative** - Download ZIP:
1. Go to https://github.com/uravularajesh59-del/SMART-LEARN
2. Click green "Code" button
3. Click "Download ZIP"
4. Extract and follow manual setup steps

---

## ✅ Verification Checklist

After running the application, verify these work:

- [ ] Homepage loads at http://localhost:5000
- [ ] You see the gradient purple hero section
- [ ] Course cards display (Python, Web Dev, Data Science, Java)
- [ ] Clicking a course opens registration form
- [ ] Can register a student
- [ ] Can view course videos page
- [ ] Can take the test
- [ ] Can view results
- [ ] Can download certificate with student name

---

## 🎯 Quick Test

Run this to verify everything works:

```bash
# 1. Clone
git clone https://github.com/uravularajesh59-del/SMART-LEARN.git
cd SMART-LEARN/StudentTechSystem

# 2. Check Python
python --version
# Should show Python 3.8 or higher

# 3. Install
pip install -r requirements.txt

# 4. Run
python app.py

# 5. Open browser
# Go to: http://localhost:5000
```

**Expected Result**: You should see a beautiful homepage with:
- Purple gradient background
- "SMART-LEARN" logo
- Four course cards
- Smooth animations

---

## 📊 System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Python | 3.8 | 3.10+ |
| RAM | 512MB | 1GB+ |
| Disk Space | 100MB | 500MB |
| OS | Windows 7+, macOS 10.12+, Linux | Any modern OS |

---

## 🔍 Debug Mode

If you're still having issues, run with debug output:

```bash
# Windows
set FLASK_DEBUG=1
python app.py

# Mac/Linux
export FLASK_DEBUG=1
python app.py
```

This will show detailed error messages.

---

## 📞 Still Not Working?

If you've tried everything above and it's still not working:

1. **Check Python version**: `python --version` (must be 3.8+)
2. **Check pip works**: `pip --version`
3. **Try in a fresh directory**: Delete everything and clone again
4. **Check firewall**: Make sure port 5000 isn't blocked
5. **Try different port**: Edit `app.py` to use port 5001 or 8000

---

## ✨ Success Indicators

You'll know it's working when you see:

```
 * Serving Flask app 'app'
 * Debug mode: on
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
```

And when you open http://localhost:5000 you see:
- Beautiful modern design
- Vibrant cyan-blue colors
- Smooth animations
- Course cards

---

## 🎉 Repository is VERIFIED WORKING!

The repository has been tested and confirmed working with:
- ✅ Python 3.12.10
- ✅ Flask 3.1.2
- ✅ Windows 11
- ✅ All features functional
- ✅ Certificate download working
- ✅ Modern UI displaying correctly

**Your GitHub repository is perfect and ready to use!** 🚀
