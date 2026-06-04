import { Router } from "express";

import { authenticate }
  from "../middlewares/auth.middleware";

import { statsHandler }
  from "../controllers/dashboard.controller";

const router = Router();

/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Dashboard statistics
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard metrics
 */
router.get(
  "/stats",
  authenticate,
  statsHandler
);

export default router;