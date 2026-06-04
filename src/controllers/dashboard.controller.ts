import { Response } from "express";

import { AuthRequest }
  from "../middlewares/auth.middleware";

import { getDashboardStats }
  from "../services/dashboard.service";

export async function statsHandler(
  req: AuthRequest,
  res: Response
) {
  try {
    const stats =
      await getDashboardStats(
        req.userId!
      );

    return res.json(stats);
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch stats",
    });
  }
}