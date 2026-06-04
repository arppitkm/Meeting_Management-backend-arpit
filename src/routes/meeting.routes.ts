import { Router } from "express";

import {
  createMeetingHandler,
  getMeetingsHandler,
  getMeetingByIdHandler,
  deleteMeetingHandler,
} from "../controllers/meeting.controller";

import {
  authenticate,
} from "../middlewares/auth.middleware";

import transcriptRoutes from "./transcript.routes";
import { summaryHandler } from "../controllers/summary.controller";



const router = Router();

router.post(
  "/",
  authenticate,
  createMeetingHandler
);

router.get(
  "/",
  authenticate,
  getMeetingsHandler
);

router.get(
  "/:id",
  authenticate,
  getMeetingByIdHandler
);

router.delete(
  "/:id",
  authenticate,
  deleteMeetingHandler
);

router.use(
    "/:id/transcripts",
    transcriptRoutes
);

router.get(
  "/:id/summary",
  authenticate,
  summaryHandler
);

export default router;