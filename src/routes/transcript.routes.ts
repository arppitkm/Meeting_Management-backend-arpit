import { Router } from "express";

import {
  addTranscriptHandler,
  getTranscriptsHandler,
} from "../controllers/transcript.controller";

import { authenticate }
from "../middlewares/auth.middleware";

const router = Router({ mergeParams: true });

router.post(
  "/",
  authenticate,
  addTranscriptHandler
);

router.get(
  "/",
  authenticate,
  getTranscriptsHandler
);

export default router;