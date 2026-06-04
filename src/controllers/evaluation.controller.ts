import { Request, Response } from "express";

export async function evaluationHandler(
  _req: Request,
  res: Response
) {
  return res.json({
    project: "Hintro Meeting Intelligence Backend",
    status: "running",
    features: {
      authentication: true,
      meetings: true,
      transcripts: true,
      actionItems: true,
      reminders: true,
      aiSummary: true,
      dashboard: true,
      swagger: true,
    },
  });
}