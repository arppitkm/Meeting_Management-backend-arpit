"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meeting_controller_1 = require("../controllers/meeting.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const transcript_routes_1 = __importDefault(require("./transcript.routes"));
const summary_controller_1 = require("../controllers/summary.controller");
const router = (0, express_1.Router)();
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
router.post("/", auth_middleware_1.authenticate, meeting_controller_1.createMeetingHandler);
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
router.get("/", auth_middleware_1.authenticate, meeting_controller_1.getMeetingsHandler);
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
router.get("/:id", auth_middleware_1.authenticate, meeting_controller_1.getMeetingByIdHandler);
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
router.delete("/:id", auth_middleware_1.authenticate, meeting_controller_1.deleteMeetingHandler);
router.use("/:id/transcripts", transcript_routes_1.default);
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
router.get("/:id/summary", auth_middleware_1.authenticate, summary_controller_1.summaryHandler);
exports.default = router;
//# sourceMappingURL=meeting.routes.js.map