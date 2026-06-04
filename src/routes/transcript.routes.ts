import { Router } from "express";

import {
  addTranscriptHandler,
  getTranscriptsHandler,
} from "../controllers/transcript.controller";

import { authenticate }
from "../middlewares/auth.middleware";

const router = Router({ mergeParams: true });

/**
 * @swagger
 * /api/meetings/{id}/transcripts:
 *   post:
 *     tags:
 *       - Transcripts
 *     summary: Add transcript segment
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Transcript added
 */
router.post(
  "/",
  authenticate,
  addTranscriptHandler
);

/**
 * @swagger
 * /api/meetings/{id}/transcripts:
 *   get:
 *     tags:
 *       - Transcripts
 *     summary: Get transcripts for meeting
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transcript list
 */
router.get(
  "/",
  authenticate,
  getTranscriptsHandler
);

export default router;