import { z } from "zod";

export const createActionItemSchema = z.object({
  meetingId: z.string(),
  task: z.string().min(1),
  assignee: z.string().min(1),
  dueDate: z.string().optional(),
});

export const updateStatusSchema = z.object({
  status: z.enum([
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
  ]),
});