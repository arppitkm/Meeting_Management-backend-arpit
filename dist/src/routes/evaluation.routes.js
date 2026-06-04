"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluation_controller_1 = require("../controllers/evaluation.controller");
const router = (0, express_1.Router)();
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
router.get("/", evaluation_controller_1.evaluationHandler);
exports.default = router;
//# sourceMappingURL=evaluation.routes.js.map