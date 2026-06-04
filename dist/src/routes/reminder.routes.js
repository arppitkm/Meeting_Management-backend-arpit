"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const reminder_controller_1 = require("../controllers/reminder.controller");
const router = (0, express_1.Router)();
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
router.post("/run", auth_middleware_1.authenticate, reminder_controller_1.runRemindersHandler);
exports.default = router;
//# sourceMappingURL=reminder.routes.js.map