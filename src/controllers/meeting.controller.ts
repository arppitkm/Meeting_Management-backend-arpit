import { Response } from "express";

import { AuthRequest } from "../middlewares/auth.middleware";

import {
  createMeetingSchema,
} from "../validators/meeting.validator";

import {
  createMeeting,
  getMeetings,
  getMeetingById,
  deleteMeeting,
} from "../services/meeting.service";

export async function createMeetingHandler(
  req: AuthRequest,
  res: Response
) {
  try {
    const data = createMeetingSchema.parse(req.body);

    const meeting = await createMeeting(
      data.title,
      data.meetingDate,
      req.userId!
    );

    return res.status(201).json(meeting);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Failed to create meeting",
    });
  }
}

export async function getMeetingsHandler(
  req: AuthRequest,
  res: Response
) {
  const meetings = await getMeetings(
    req.userId!
  );

  return res.json(meetings);
}

export async function getMeetingByIdHandler(
  req: AuthRequest,
  res: Response
) {
  const meeting = await getMeetingById(
    String(req.params.id),
    req.userId!
  );

  if (!meeting) {
    return res.status(404).json({
      message: "Meeting not found",
    });
  }

  return res.json(meeting);
}

export async function deleteMeetingHandler(
  req: AuthRequest,
  res: Response
) {
  try {
    const result = await deleteMeeting(
      String(req.params.id),
      req.userId!
    );

    return res.json(result);
  } catch (error) {
    return res.status(404).json({
      message:
        error instanceof Error
          ? error.message
          : "Delete failed",
    });
  }
}