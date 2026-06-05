import { Router } from "express";

import {
  createHandler,
  listHandler,
  updateStatusHandler,
  deleteHandler,
} from "../controllers/action-item.controller";

import {
  authenticate,
} from "../middlewares/auth.middleware";

const router = Router();

router.use(authenticate);

/**
 * @swagger
 * /api/action-items:
 *   post:
 *     tags:
 *       - Action Items
 *     summary: Create action item
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - meetingId
 *               - task
 *               - assignee
 *             properties:
 *               meetingId:
 *                 type: string
 *                 example: cmq01qf7d00022bjazbg5ph31
 *               task:
 *                 type: string
 *                 example: Complete dashboard implementation
 *               assignee:
 *                 type: string
 *                 example: Arpit
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-06-15T00:00:00Z
 *     responses:
 *       201:
 *         description: Action item created
 */
router.post("/", createHandler);

/**
 * @swagger
 * /api/action-items:
 *   get:
 *     tags:
 *       - Action Items
 *     summary: Get action items
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List action items
 */
router.get("/", listHandler);

/**
 * @swagger
 * /api/action-items/{id}/status:
 *   patch:
 *     tags:
 *       - Action Items
 *     summary: Update action item status
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - PENDING
 *                   - IN_PROGRESS
 *                   - COMPLETED
 *                 example: IN_PROGRESS
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch(
  "/:id/status",
  updateStatusHandler
);

/**
 * @swagger
 * /api/action-items/{id}:
 *   delete:
 *     tags:
 *       - Action Items
 *     summary: Delete action item
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
 *         description: Action item deleted
 */
router.delete(
  "/:id",
  deleteHandler
);

export default router;