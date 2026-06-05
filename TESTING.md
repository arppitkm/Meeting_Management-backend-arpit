## Test Scenarios Executed

### Authentication

* User registration
* Duplicate email registration
* User login
* Invalid login credentials
* Protected route access

### Meetings

* Create meeting
* Get all meetings
* Get meeting by ID
* Delete meeting

### Transcripts

* Add transcript segment
* Retrieve transcript segments

### AI Summary

* Generate summary from transcript
* Validate citation generation

### Action Items

* Create action item
* Retrieve action items
* Update action item status
* Delete action item

### Reminders

* Execute reminder workflow
* Verify Discord notification delivery

### Dashboard

* Retrieve statistics endpoint

### Deployment

* Render deployment verification
* PostgreSQL connectivity verification
* Environment variable validation

---

## Edge Cases Considered

* Missing JWT token
* Invalid JWT token
* Missing required fields
* Empty transcript submissions
* Invalid meeting IDs
* Invalid action item IDs
* Duplicate email registrations
* Past due dates
* Completed action items

---

## Limitations Discovered

* AI output varies slightly between executions.
* Reminder processing depends on matching due-date criteria.
* Discord integration requires a valid webhook configuration.
