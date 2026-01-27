#!/usr/bin/env python
"""
Launcher script for Student Technology Guidance System
Handles dependency installation and server startup
"""

import subprocess
import sys
import os

def check_and_install_dependencies():
    """Check and install required packages"""
    print("=" * 60)
    print("  Student Technology Guidance System - Launcher")
    print("=" * 60)
    print()
    
    # Check if packages are installed
    required_packages = ['flask', 'flask_sqlalchemy']
    missing_packages = []
    
    for package in required_packages:
        try:
            __import__(package)
        except ImportError:
            missing_packages.append(package)
    
    if missing_packages:
        print(f"Installing missing packages: {', '.join(missing_packages)}")
        try:
            subprocess.check_call([sys.executable, '-m', 'pip', 'install'] + missing_packages)
            print("✓ Dependencies installed successfully!")
        except subprocess.CalledProcessError:
            print("✗ Failed to install dependencies")
            print("Please run: pip install -r requirements.txt")
            input("Press Enter to exit...")
            sys.exit(1)
    else:
        print("✓ All dependencies are installed")
    
    print()

def start_server():
    """Start the Flask development server"""
    print("Starting the server...")
    print()
    print("-" * 60)
    print("  Server is running at: http://127.0.0.1:5000")
    print("  Press Ctrl+C to stop the server")
    print("-" * 60)
    print()
    
    # Run the Flask app
    try:
        from app import app
        app.run(debug=True, host='127.0.0.1', port=5000)
    except KeyboardInterrupt:
        print("\n\nServer stopped by user")
    except Exception as e:
        print(f"\n✗ Error starting server: {e}")
        input("Press Enter to exit...")
        sys.exit(1)

if __name__ == "__main__":
    try:
        check_and_install_dependencies()
        start_server()
    except Exception as e:
        print(f"\n✗ Unexpected error: {e}")
        input("Press Enter to exit...")
        sys.exit(1)
