"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsHandler = statsHandler;
const dashboard_service_1 = require("../services/dashboard.service");
async function statsHandler(req, res) {
    try {
        const stats = await (0, dashboard_service_1.getDashboardStats)(req.userId);
        return res.json(stats);
    }
    catch (error) {
        return res.status(500).json({
            message: error instanceof Error
                ? error.message
                : "Failed to fetch stats",
        });
    }
}
//# sourceMappingURL=dashboard.controller.js.map