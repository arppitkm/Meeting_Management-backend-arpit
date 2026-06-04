import { Response } from "express";

import { AuthRequest } from "../middlewares/auth.middleware";

import {
  createTranscriptSchema,
} from "../validators/transcript.validator";

import {
  addTranscript,
  getTranscripts,
} from "../services/transcript.service";

export async function addTranscriptHandler(
  req: AuthRequest,
  res: Response
) {
  try {
    const data =
      createTranscriptSchema.parse(req.body);

    const transcript =
      await addTranscript(
        String(req.params.id),
        data.speaker,
        data.timestamp,
        data.text
      );

    return res.status(201).json(transcript);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Create transcript failed",
    });
  }
}

export async function getTranscriptsHandler(
  req: AuthRequest,
  res: Response
) {
  try {
    const transcripts =
      await getTranscripts(
        String(req.params.id)
      );

    return res.json(transcripts);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Fetch transcripts failed",
    });
  }
}