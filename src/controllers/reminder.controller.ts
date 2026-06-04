import { Request, Response } from "express";
import { processReminders } from "../jobs/reminder.job";

export async function runRemindersHandler(
  _req: Request,
  res: Response
) {
  try {
    const processed =
      await processReminders();

    return res.json({
      processed,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Reminder processing failed",
    });
  }
}