## Prompt Design

The application uses Google Gemini to generate meeting summaries from transcript data.

The prompt instructs the model to:

* Summarize the meeting
* Extract key discussion points
* Identify decisions made
* Extract action items
* Return structured output

Transcript segments are passed to the model with segment identifiers to enable citation generation.

Example:

Segment 1: Arpit: We should release the dashboard this week.

Segment 2: Rahul: I will complete the implementation by Friday.

---

## Citation Strategy

Each transcript segment is assigned a segment number before being sent to Gemini.

Example:

Segment 1
Segment 2
Segment 3

Generated insights reference the segment numbers from which they were derived.

This provides traceability between AI output and transcript content.

---

## Hallucination Prevention

The prompt explicitly instructs Gemini to:

* Use only information present in the transcript
* Avoid inventing attendees
* Avoid inventing decisions
* Avoid inventing action items
* Avoid generating unsupported conclusions

Only transcript content is provided as context.

No external data sources are available to the model.

---

## Output Validation

The application:

* Requires transcript data before generating summaries
* Restricts AI input to transcript content
* Parses the AI response before returning it
* Returns errors for invalid responses

---

## Known Limitations

* AI output quality depends on transcript quality.
* Very short transcripts may produce limited insights.
* Citations reference transcript segments rather than exact character positions.
* LLM outputs may vary slightly between executions.
