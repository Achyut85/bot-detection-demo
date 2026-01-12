# Bot Detection Demo (React + Node.js)

This project demonstrates a simple and practical approach to **detecting automated (bot) traffic** versus **genuine human users** on a web application.  
It is built to showcase **engineering thinking, detection logic, and mitigation strategy**, not a production-ready security system.

---

## Objective

- Detect bot-like behavior using simple behavioral signals
- Differentiate between human users and bots
- Apply rate limiting and conditional CAPTCHA
- Maintain a smooth experience for genuine users

---

## Tech Stack

### Frontend
- React (ES6)
- Fetch API

### Backend
- Node.js
- Express (ES6 modules)
- express-rate-limit
- Custom middleware

---

## How Detection Works

### Frontend
- Tracks the **time taken before clicking** a button
- Sends interaction time to the backend using a custom header
- Displays CAPTCHA only when the backend requests verification
- Provides buttons to simulate **Human** and **Bot** behavior

### Backend
- Inspects incoming requests using middleware
- Calculates a **risk score** based on:
  - Very fast interaction time
  - Missing or abnormal user-agent
- Applies:
  - Rate limiting
  - Conditional CAPTCHA
- Uses gradual mitigation instead of hard blocking

---

## Bot Simulation

The frontend provides two actions:

- **Submit as Human**
  - User waits before clicking
  - Request is treated as normal human behavior

- **Simulate Bot**
  - Request is auto-submitted within 200ms
  - Mimics bot-like instant actions
  - Triggers CAPTCHA or rate limiting

This clearly demonstrates how bot behavior is detected and handled.


---

## Installation & Setup

### Prerequisites
- Node.js (v16 or later)
- npm

---

### Backend Setup

```bash
cd backend
npm install
node server.js

### Frontend Setup

```bash
cd frontend
npm install
npm run dev


