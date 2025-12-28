# 🚨 Real-Time Incident Reporting System
A full-stack Real-Time Incident Reporting System that allows users to report incidents with live location detection and enables admins to monitor, manage, and update incident statuses through an interactive dashboard.

This project is designed for hackathons, smart city solutions, emergency response systems, and disaster management platforms.
# 🌟 Features
* 👤 User Features
  * Report incidents in real time
  * Automatic GPS-based location detection
  * Interactive map to adjust incident location
  * Select incident type and severity
  * Instant submission to backend
  * Clean and responsive UI
* 🛠️ Admin Features
  * View all reported incidents in real time
  * Incident list sorted by latest reports
  * See type, description, location, severity, and status
  * Status tracking (Pending / In Progress / Resolved)
  * Scalable backend architecture
# 🧑‍💻 Tech Stack
* Frontend
  * HTML5
  * CSS3
  * JavaScript (Vanilla JS)
  * Leaflet.js (Maps)
  * OpenStreetMap
  * Browser Geolocation API
* Backend
  * FastAPI (Python)
  * SQLAlchemy ORM
  * Pydantic
  * Uvicorn ASGI Server
* Database
  * MySQL
  * MySQL Workbench
# 📁 Project Structure

    Real-time-incident-reporting/
    │
    ├── Backend/
    │   ├── app/
    │   │   ├── api/
    │   │   │   └── routes/
    │   │   │       └── incidents.py
    │   │   ├── core/
    │   │   │   ├── config.py
    │   │   │   └── database.py
    │   │   ├── models/
    │   │   │   └── incident.py
    │   │   ├── schemas/
    │   │   │   └── incident.py
    │   │   ├── main.py
    │   │   └── __init__.py
    │   ├── requirements.txt
    │   └── README.md
    │
    ├── Frontend/
    │   ├── css/
    │   │   └── style.css
    │   ├── js/
    │   │   ├── report.js
    │   │   └── dashboard.js
    │   ├── report.html
    │   ├── dashboard.html
    │   └── index.html
    │
    └── README.md


# ⚙️ Installation & Setup
  * 1️⃣ Clone the Repository
    git clone [https://github.com/parvkajla/real-time-incident-reporting.git](https://github.com/parvkajla/real-time-incident-reporting.git)
    cd real-time-incident-reporting
  * 2️⃣ Backend Setup
    * Install Dependencies
      cd Backend
      pip install -r requirements.txt
    * Configure Database (backend/app/core/config.py)
      DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/incident_db"
    * Run Backend Server
      python -m uvicorn app.main:app --reload
    * Backend will run at:
      http://127.0.0.1:8000
    * Swagger Docs:
      http://127.0.0.1:8000/docs
# 3️⃣ Database Setup (MySQL)
  * Create database:
    CREATE DATABASE incident_db;
  * Ensure table structure:
    ALTER TABLE incidents
    ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP;
  * 4️⃣ Frontend Setup
    cd Frontend
    python -m http.server 5500
  Open in browser:
    * User Report Page
      http://127.0.0.1:5500/report.html
    * Admin Dashboard
      http://127.0.0.1:5500/dashboard.html
# 🔌 API Endpoints
  Create Incident
  
    POST /incidents/

  
      {
        "type": "Accident",
        "description": "Car accident on highway",
        "location": "Lat: 28.61, Lng: 77.20",
        "severity": "High"
      }
      
  Get All Incidents
  
    GET /incidents/

# 🗺️ Map & Location Handling
  * Uses browser Geolocation API
  * Leaflet.js map for visual confirmation
  * Draggable marker to adjust incident location
  * Location stored as latitude & longitude string
# 🚀 Future Enhancements
  * Admin authentication & role-based access
  * Real-time updates using WebSockets
  * Incident filtering & search
  * Incident analytics dashboard
  * Mobile app integration
  * Cloud deployment (Railway / Render / AWS)
# 🏆 Use Cases
  * Smart City Applications
  * Emergency Response Systems
  * Disaster Management Platforms
  * Campus Safety Systems
# 👨‍💻 Author
  * Parv Kajla
  * Pari Rastogi 
      BTech CSE (AI & ML)
      Galgotias University
