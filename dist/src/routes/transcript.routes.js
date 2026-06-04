"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transcript_controller_1 = require("../controllers/transcript.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)({ mergeParams: true });
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
router.post("/", auth_middleware_1.authenticate, transcript_controller_1.addTranscriptHandler);
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
router.get("/", auth_middleware_1.authenticate, transcript_controller_1.getTranscriptsHandler);
exports.default = router;
//# sourceMappingURL=transcript.routes.js.map