@echo off
echo ===================================================
echo   Starting Student Technology Guidance System
echo ===================================================
echo.
echo Installing dependencies...
pip install -r requirements.txt
echo.
echo Starting the Server...
echo Please open your browser and go to: http://127.0.0.1:5000
echo.
python app.py
pause
