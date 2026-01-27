#!/bin/bash

echo "========================================"
echo "  SMART-LEARN - Quick Start Script"
echo "========================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python 3 is not installed"
    echo "Please install Python 3.8 or higher"
    exit 1
fi

echo "[1/4] Checking Python installation..."
python3 --version
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "[2/4] Creating virtual environment..."
    python3 -m venv venv
    echo "Virtual environment created successfully!"
else
    echo "[2/4] Virtual environment already exists."
fi
echo ""

echo "[3/4] Activating virtual environment and installing dependencies..."
source venv/bin/activate
pip install -r requirements.txt
echo ""

echo "[4/4] Starting SMART-LEARN application..."
echo ""
echo "========================================"
echo "  Application is starting..."
echo "  URL: http://localhost:5000"
echo "========================================"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

python app.py
