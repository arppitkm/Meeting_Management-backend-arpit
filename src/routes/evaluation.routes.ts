import { Router } from "express";
import { evaluationHandler } from "../controllers/evaluation.controller";

const router = Router();

/**
 * @swagger
 * /api/evaluation:
 *   get:
 *     tags:
 *       - Evaluation
 *     summary: Evaluation endpoint for assignment reviewers
 *     responses:
 *       200:
 *         description: Project evaluation information
 */
router.get("/", evaluationHandler);

export default router;