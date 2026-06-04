"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const action_item_controller_1 = require("../controllers/action-item.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
/**
 * @swagger
 * /api/action-items:
 *   post:
 *     tags:
 *       - Action Items
 *     summary: Create action item
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Action item created
 */
router.post("/", action_item_controller_1.createHandler);
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
router.get("/", action_item_controller_1.listHandler);
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
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch("/:id/status", action_item_controller_1.updateStatusHandler);
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
router.delete("/:id", action_item_controller_1.deleteHandler);
exports.default = router;
//# sourceMappingURL=action-item.routes.js.map