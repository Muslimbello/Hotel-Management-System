## Introduction

Welcome to the Hotel Management Sytem Project! This project is a comprehensive application designed to streamline and automate hotel operations. Built with a React frontend and a Django backend, it allows administrators and staff to manage bookings, guests, rooms, and other essential hotel services seamlessly. This project focuses on providing a modern, responsive user experience, while ensuring efficient backend operations.

## Features

- **User Authentication:** User Authentication: Role-based access control for Admins, Managers, and Staff.
- **Room Management:** Add, edit, delete, and categorize rooms (e.g., single, double, suites).
- **Booking Management:** Manage guest bookings, check-in, check-out, and cancellations.
- **Responsive UI:** Accessible across desktop, tablet, and mobile platforms.

## Contributors

Check out the [AUTHORS](AUTHORS) file to see all contributors to this project.

## Technologies Used

# Frontend:

React: A modern JavaScript library for building user interfaces.
Axios: For making HTTP requests to the backend.
React Router: For managing application routing.
BootStarp : For a sleek and professional user interface.

# Backend:

Django: A high-level Python web framework for building robust backend systems.
Django REST Framework (DRF): For building RESTful APIs to communicate with the frontend.
PostgreSQL: For database management.
Other Tools:

Git/GitHub: Version control and collaboration.

## Getting Started

To get started with the Simple Shell Project, follow these steps:

1. Clone the Repository:\*\*

git clone <repository_url>

2. **Navigate to the Project Directory:**

cd Hotel-Management-System

## Backend Setup

3. **Create and activate a virtual environment:**

# On linux

python -m venv venv

# On Windows:

source venv/bin/activate
venv\Scripts\activate

4. **Install backend dependencies:**
   pip install -r requirements.txt

5. **Run database migrations:**
   python manage.py migrate
6. **Run the Django development server:**
   python manage.py runserver

## Frontend Setup

1. **Install dependencies:**
   npm install
2. **Run the React development server:**
   npm start

## API Endpoints

API Endpoints
Here are some key API endpoints available for interaction with the backend:

Method Endpoint Description
GET /api/hotels/ List all rooms
POST /api/hotel/ Add a new room
PUT /api/hotel/ink:id/ Update User info
DELETE /api/hotel/ink:id/ Delete User info
GET /api/auth/register/ Register a staff
POST /api/auth/login/ staff login

## Contributing

- **Fork the Repository:** Fork the repository to your own GitHub account.

- **Create a Branch:** Create a new branch to work on your feature or bug fix.

- **Make Changes:** Make changes to the codebase and test thoroughly.

- **Open a Pull Request:** If everything looks good, open a pull request explaining the changes you made.

## Issues

If you encounter any issues or have suggestions for improvements, please feel free to create an issue on the GitHub repository. Thank You 👋👋
