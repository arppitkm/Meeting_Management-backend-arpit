# API Documentation

Base URL

```http
http://localhost:3000
```

---

# Authentication

All protected endpoints require:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# Health Check

## Get Server Status

### Request

```http
GET /health
```

### Response

```json
{
  "status": "UP"
}
```

---

# Authentication APIs

## Register User

### Request

```http
POST /api/auth/register
```

### Body

```json
{
  "name": "Arpit",
  "email": "arpit@test.com",
  "password": "password123"
}
```

### Response

```json
{
  "id": "user_id",
  "name": "Arpit",
  "email": "arpit@test.com"
}
```

---

## Login User

### Request

```http
POST /api/auth/login
```

### Body

```json
{
  "email": "arpit@test.com",
  "password": "password123"
}
```

### Response

```json
{
  "token": "jwt_token"
}
```

---

# Meeting APIs

## Create Meeting

### Request

```http
POST /api/meetings
```

### Body

```json
{
  "title": "Sprint Planning",
  "meetingDate": "2026-06-10T10:00:00Z"
}
```

### Response

```json
{
  "id": "meeting_id",
  "title": "Sprint Planning",
  "meetingDate": "2026-06-10T10:00:00.000Z"
}
```

---

## Get Meetings

### Request

```http
GET /api/meetings
```

### Response

```json
[
  {
    "id": "meeting_id",
    "title": "Sprint Planning"
  }
]
```

---

## Get Meeting By ID

### Request

```http
GET /api/meetings/:id
```

### Response

```json
{
  "id": "meeting_id",
  "title": "Sprint Planning"
}
```

---

## Delete Meeting

### Request

```http
DELETE /api/meetings/:id
```

### Response

```json
{
  "message": "Meeting deleted successfully"
}
```

---

# Transcript APIs

## Add Transcript Segment

### Request

```http
POST /api/meetings/:id/transcripts
```

### Body

```json
{
  "speaker": "Raj",
  "timestamp": "00:01:25",
  "text": "Finish API integration by Friday"
}
```

### Response

```json
{
  "id": "transcript_id",
  "meetingId": "meeting_id",
  "speaker": "Raj",
  "timestamp": "00:01:25",
  "text": "Finish API integration by Friday"
}
```

---

# AI Summary APIs

## Generate Meeting Summary

### Request

```http
GET /api/meetings/:id/summary
```

### Response

```json
{
  "summary": "AI generated meeting summary"
}
```

### Notes

This endpoint:

* Fetches transcript segments for a meeting
* Sends transcript data to Google Gemini
* Returns an AI-generated summary

---

# Action Item APIs

## Create Action Item

### Request

```http
POST /api/action-items
```

### Body

```json
{
  "meetingId": "meeting_id",
  "task": "Finish API integration",
  "assignee": "Raj",
  "dueDate": "2026-06-10T00:00:00Z"
}
```

### Response

```json
{
  "id": "action_item_id",
  "status": "PENDING"
}
```

---

## Get Action Items

### Request

```http
GET /api/action-items
```

### Response

```json
[
  {
    "id": "action_item_id",
    "task": "Finish API integration",
    "status": "PENDING"
  }
]
```

---

## Update Action Item Status

### Request

```http
PATCH /api/action-items/:id/status
```

### Body

```json
{
  "status": "IN_PROGRESS"
}
```

### Allowed Values

```text
PENDING
IN_PROGRESS
COMPLETED
```

### Response

```json
{
  "id": "action_item_id",
  "status": "IN_PROGRESS"
}
```

---

## Delete Action Item

### Request

```http
DELETE /api/action-items/:id
```

### Response

```json
{
  "message": "Action item deleted successfully"
}
```

---

# Reminder APIs

## Run Reminder Job

### Request

```http
POST /api/reminders/run
```

### Response

```json
{
  "processed": 1
}
```

### Notes

This endpoint:

* Finds pending action items
* Creates reminder history entries
* Simulates reminder notifications

---

# Dashboard APIs

## Get Dashboard Statistics

### Request

```http
GET /api/dashboard/stats
```

### Response

```json
{
  "meetings": 1,
  "transcripts": 1,
  "actionItems": 2,
  "completedActionItems": 0,
  "pendingActionItems": 2,
  "remindersSent": 1
}
```

---

# Authentication Errors

## Missing Token

```json
{
  "message": "Authorization header missing"
}
```

---

## Invalid Token

```json
{
  "message": "Invalid or expired token"
}
```

---

# Validation Errors

Example:

```json
{
  "message": "Validation failed"
}
```

Returned when request payload does not satisfy schema validation.

---

# AI Integration

Provider: Google Gemini

Model:

```text
gemini-2.5-flash
```

Purpose:

* Meeting summarization
* Action item extraction support
* Transcript analysis

---

# API Testing

The complete API suite can be tested using:

* Postman Collection
* cURL commands
* REST clients such as Insomnia

Authentication endpoints should be executed first to obtain a JWT token for protected routes.
