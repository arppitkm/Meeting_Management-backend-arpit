import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateMeetingSummary(
  transcriptText: string
) {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are analyzing a meeting transcript.

IMPORTANT:
- Use only information explicitly present in the transcript.
- Do not invent attendees.
- Do not invent action items.
- Do not invent decisions.
- Do not invent outcomes.
- Every insight must contain citations.
- Citations must reference transcript segment numbers.

Return ONLY valid JSON.

Format:

{
  "summary": [
    {
      "text": "summary point",
      "citations": [1]
    }
  ],
  "decisions": [
    {
      "text": "decision",
      "citations": [2]
    }
  ],
  "actionItems": [
    {
      "text": "action item",
      "citations": [3]
    }
  ]
}

Transcript:

${transcriptText}
`,
    });

  return response.text;
}