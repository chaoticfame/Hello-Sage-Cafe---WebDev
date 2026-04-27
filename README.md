☕ Hello Sage Cafe
A Modern Web Experience for the Ultimate Coffee Aesthetic

📖 Overview
Hello Sage Cafe is a responsive web application designed to simulate a premium coffee shop experience. Originally developed during my first year of BSIT at OLFU, this project has been overhauled to implement better security practices, optimized database queries, and a cleaner UI.

This project serves as a foundation for my journey into Full-Stack Development and Cybersecurity, ensuring that user data and shop transactions are handled with industry-standard logic.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Custom animations), JavaScript (Vanilla)

Backend: PHP 8.x

Database: MySQL / MariaDB

Tools: Google Antigravity IDE, Git, XAMPP

✨ Key Features
Dynamic Menu: Real-time data fetching from MySQL to display seasonal coffee blends.

User Authentication: Secure login/signup system with password hashing (Cisco Cybersecurity standards applied).

Responsive Design: Fully optimized for mobile, tablet, and desktop (tested on Lenovo LOQ).

Inventory Logic: Admin-side capability to update stock levels and pricing.

🚀 Installation & Setup
To run this project locally on your machine:

Clone the Repository:

Bash
git clone https://github.com/Antoneee1/Hello-Sage-Cafe---WebDev.git
Move to Web Directory: Place the folder in your htdocs (XAMPP) or www (WAMP) directory.

Database Setup:

Open phpMyAdmin.

Create a database named hello_sage_db.

Import the database.sql file located in the /assets folder.

Configure Connection: Update config.php with your local database credentials.

Launch: Navigate to localhost/Hello-Sage-Cafe---WebDev in your browser.

🛡️ Cybersecurity Enhancements
In the latest version, I've implemented:

SQL Injection Prevention: Switched to Prepared Statements (PDO) to secure database interactions.

XSS Protection: Sanitized user inputs on the contact and order forms.

Secure Session Management: Improved session handling to prevent hijacking.

📈 Future Roadmap
[ ] Integration with a local AI chatbot (Ollama/Qwen) for coffee recommendations.

[ ] Integration of a real-time order tracking system.

[ ] Migration to a Docker-containerized environment for easier deployment.
