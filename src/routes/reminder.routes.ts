import { Router } from "express";

import { authenticate }
  from "../middlewares/auth.middleware";

import { runRemindersHandler }
  from "../controllers/reminder.controller";

const router = Router();

/**
 * @swagger
 * /api/reminders/run:
 *   post:
 *     tags:
 *       - Reminders
 *     summary: Run reminder job manually
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Reminder job executed
 */
router.post(
  "/run",
  authenticate,
  runRemindersHandler
);

export default router;