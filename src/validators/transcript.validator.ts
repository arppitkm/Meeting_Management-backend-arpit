import { z } from "zod";

export const createTranscriptSchema = z.object({
  timestamp: z.string().min(1),
  speaker: z.string().min(1),
  text: z.string().min(1),
});