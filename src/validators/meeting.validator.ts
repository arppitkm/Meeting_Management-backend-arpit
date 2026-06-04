import { z } from "zod";

export const createMeetingSchema = z.object({
  title: z.string().min(1, "Title is required"),
  meetingDate: z.iso.datetime(),
});

export type CreateMeetingInput =
  z.infer<typeof createMeetingSchema>;