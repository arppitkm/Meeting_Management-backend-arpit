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

/**
 * @swagger
 * /api/meetings:
 *   post:
 *     tags:
 *       - Meetings
 *     summary: Create meeting
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Meeting created
 */
router.post(
  "/",
  authenticate,
  createMeetingHandler
);

/**
 * @swagger
 * /api/meetings:
 *   get:
 *     tags:
 *       - Meetings
 *     summary: Get all meetings
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of meetings
 */
router.get(
  "/",
  authenticate,
  getMeetingsHandler
);

/**
 * @swagger
 * /api/meetings/{id}:
 *   get:
 *     tags:
 *       - Meetings
 *     summary: Get meeting by ID
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
 *         description: Meeting details
 */
router.get(
  "/:id",
  authenticate,
  getMeetingByIdHandler
);

/**
 * @swagger
 * /api/meetings/{id}:
 *   delete:
 *     tags:
 *       - Meetings
 *     summary: Delete meeting
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
 *         description: Meeting deleted
 */
router.delete(
  "/:id",
  authenticate,
  deleteMeetingHandler
);

router.use(
    "/:id/transcripts",
    transcriptRoutes
);

/**
 * @swagger
 * /api/meetings/{id}/summary:
 *   get:
 *     tags:
 *       - AI Summary
 *     summary: Generate meeting summary using Gemini
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
 *         description: AI generated summary
 */
router.get(
  "/:id/summary",
  authenticate,
  summaryHandler
);

export default router;