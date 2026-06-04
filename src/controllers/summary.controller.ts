import { Request, Response } from "express";

import { getMeetingTranscript }
  from "../services/transcript.service";

import { generateMeetingSummary }
  from "../services/summary.service";

export async function summaryHandler(
  req: Request,
  res: Response
) {
  try {
    const meetingId = req.params.id as string;

    const transcripts =
      await getMeetingTranscript(meetingId);

    const transcriptText =
      transcripts
        .map(
          (t) =>
            `${t.speaker}: ${t.text}`
        )
        .join("\n");

    const summary =
      await generateMeetingSummary(
        transcriptText
      );

    return res.json({
      summary,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Summary generation failed",
    });
  }
}