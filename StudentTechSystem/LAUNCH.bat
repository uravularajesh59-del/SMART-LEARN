@echo off
echo ============================================================
echo   Student Technology Guidance System - Launcher
echo ============================================================
echo.
echo This installer will set up Python if needed.
echo.
echo STEP 1: Installing/Checking Python from Microsoft Store...
echo.

REM Try to run python --version to trigger MS Store installer
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed. Opening Microsoft Store...
    echo Please install Python from the Microsoft Store and run this script again.
    start ms-windows-store://pdp/?ProductId=9NRWMJP3717K
    pause
    exit /b 1
)

echo.
echo ✓ Python is installed!
echo.
echo STEP 2: Installing dependencies...
echo.

python -m pip install --upgrade pip >nul 2>&1
python -m pip install flask flask-sqlalchemy

if %errorlevel% neq 0 (
    echo.
    echo ✗ Failed to install dependencies.
    echo   Please install manually: pip install -r requirements.txt
    pause
    exit /b 1
)

echo.
echo ✓ Dependencies installed successfully!
echo.
echo STEP 3: Starting the server...
echo.
echo ============================================================
echo   Server URL: http://127.0.0.1:5000
echo   Press Ctrl+C to stop the server
echo ============================================================
echo.

REM Open browser after a short delay
timeout /t 2 >nul
start http://127.0.0.1:5000

REM Start Flask app
python app.py

pause
