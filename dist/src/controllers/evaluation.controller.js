"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationHandler = evaluationHandler;
async function evaluationHandler(_req, res) {
    return res.json({
        project: "Hintro Meeting Intelligence Backend",
        status: "running",
        features: {
            authentication: true,
            meetings: true,
            transcripts: true,
            actionItems: true,
            reminders: true,
            aiSummary: true,
            dashboard: true,
            swagger: true,
        },
    });
}
//# sourceMappingURL=evaluation.controller.js.map