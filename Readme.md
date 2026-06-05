# Hintro Backend Assignment

## Overview

This project is a backend API for managing meetings, transcripts, action items, reminders, and AI-powered meeting summaries.

The application allows users to:

* Register and login securely
* Create and manage meetings
* Store meeting transcripts
* Generate AI-powered meeting summaries using Google Gemini
* Create and track action items
* Send reminder notifications for pending action items
* View dashboard statistics

---

## Tech Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* Prisma ORM
* JWT Authentication
* Google Gemini API

---

## Features

### Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes

### Meeting Management

* Create Meeting
* List Meetings
* Get Meeting Details
* Delete Meeting

### Transcript Management

* Add Transcript Segments
* Retrieve Meeting Transcripts

### AI Summary Generation

* Generate meeting summaries using Google Gemini
* Extract discussion points
* Extract decisions
* Extract action items

### Action Items

* Create Action Items
* List Action Items
* Update Status
* Delete Action Items

### Reminder System

* Process Pending Action Items
* Store Reminder History
* Manual Reminder Trigger Endpoint

### Dashboard

* Meetings Count
* Transcript Count
* Action Item Statistics
* Reminder Statistics

---

## Project Structure

src/

├── config/

├── controllers/

├── middlewares/

├── routes/

├── services/

├── validators/

├── jobs/

├── app.ts

└── server.ts

---

## Installation

### Clone Repository

git clone <repository-url>

cd Hintro

### Install Dependencies

npm install

---

## Environment Variables

Create a .env file in the root directory.

DATABASE_URL=postgresql://arpit@localhost:5432/hintro_db

JWT_SECRET=super-secret-jwt-key

PORT=3000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

---

## Database Setup

Generate Prisma Client

npx prisma generate

Run Introspection

npx prisma db pull

---

## Run Application

### Development Mode

Start the development server:

```bash
npm run dev
```

Server URL:

```text
http://localhost:3000
```

---

### Build Project

Compile TypeScript:

```bash
npm run build
```

---

### Production Mode

Start the compiled application:

```bash
npm start
```

---

### Deployed Application

Base URL:

https://meeting-management-backend-arpit.onrender.com

Swagger Documentation:

https://meeting-management-backend-arpit.onrender.com/api-docs

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

---

### Meetings

POST /api/meetings

GET /api/meetings

GET /api/meetings/:id

DELETE /api/meetings/:id

---

### Transcripts

POST /api/meetings/:id/transcripts

GET /api/meetings/:id/summary

---

### Action Items

POST /api/action-items

GET /api/action-items

PATCH /api/action-items/:id/status

DELETE /api/action-items/:id

---

### Reminders

POST /api/reminders/run

---

### Dashboard

GET /api/dashboard/stats

---

## Sample Requests

### Register User

POST /api/auth/register

{
"name": "Arpit",
"email": "[arpit@test.com](mailto:arpit@test.com)",
"password": "password123"
}

### Login

POST /api/auth/login

{
"email": "[arpit@test.com](mailto:arpit@test.com)",
"password": "password123"
}

### Create Meeting

POST /api/meetings

{
"title": "Sprint Planning",
"meetingDate": "2026-06-10T10:00:00Z"
}

### Add Transcript

POST /api/meetings/:id/transcripts

{
"speaker": "Raj",
"timestamp": "00:01:25",
"text": "Finish API integration by Friday"
}

### Create Action Item

POST /api/action-items

{
"meetingId": "<meeting-id>",
"task": "Finish API integration",
"assignee": "Raj",
"dueDate": "2026-06-10T00:00:00Z"
}

---

## AI Meeting Summary

Meeting transcripts are sent to Google Gemini 2.5 Flash.

The generated summary includes:

* Executive Summary
* Key Discussion Points
* Decisions Made
* Action Items

---

## Dashboard Statistics

The dashboard endpoint returns:

{
"meetings": 1,
"transcripts": 1,
"actionItems": 2,
"completedActionItems": 0,
"pendingActionItems": 2,
"remindersSent": 1
}

---

## Author

Arpit Kumar Mishra
