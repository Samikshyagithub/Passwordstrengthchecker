# Password Strength Checker Project

## Overview
This project is a **Password Strength Checker** that evaluates the strength of passwords entered by users. It analyzes factors such as **length**, **complexity**, and **uniqueness** to provide feedback on password strength. The project comprises a **frontend web interface**, a **backend server** with an API endpoint for password analysis, and a **strength evaluation algorithm**.

![Password Strength Checker Screenshot](one.png) 

---

## How It Works

### **Frontend**
The frontend provides a user-friendly interface where users can input a password. When the user clicks the **"Check Strength"** button, the frontend sends the password to the backend for analysis.

- Built with **React.js**.
- Features:
  - Input field for entering a password.
  - Button to initiate the strength check.
  - Display area for the strength result and feedback (e.g., "Strong", "Moderate", or "Weak").

![Password Strength Checker Screenshot](two.png) 


### **Backend**
The backend is built using **Node.js** and **Express.js**. It provides an API endpoint for password strength analysis. It receives the password, evaluates its strength, and returns the result to the frontend.

- Built with **Node.js** and **Express.js**.
- Features:
  - API endpoint: `/check-password`.
  - Evaluates password strength based on:
    - **Length**: Minimum 12 characters for strong passwords.
    - **Complexity**: Includes uppercase, lowercase, numbers, and special characters.
    - **Uniqueness**: Checks against common passwords.
  - Returns a JSON response with the strength and feedback.

### **Strength Evaluation Algorithm**
The password strength is evaluated using a custom algorithm that assigns a score based on the password's length, complexity, and uniqueness. The algorithm provides detailed feedback to help users improve their passwords.

---

## Features
- **Real-time Password Strength Check**: Users can input any password and get instant feedback on its strength.
- **Detailed Feedback**: Provides actionable suggestions to improve password strength.
- **User-Friendly Interface**: Simple and intuitive design for easy use.
- **Extensible**: The backend and algorithm can be updated with new rules and features for improved accuracy.

---
