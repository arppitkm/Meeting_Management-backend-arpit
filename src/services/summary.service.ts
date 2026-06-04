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
Summarize the following meeting transcript.

Include:
1. Key discussion points
2. Decisions made
3. Action items

Transcript:
${transcriptText}
`,
    });

  return response.text;
}