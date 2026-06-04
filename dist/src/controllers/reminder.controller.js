"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runRemindersHandler = runRemindersHandler;
const reminder_job_1 = require("../jobs/reminder.job");
async function runRemindersHandler(_req, res) {
    try {
        const processed = await (0, reminder_job_1.processReminders)();
        return res.json({
            processed,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error instanceof Error
                ? error.message
                : "Reminder processing failed",
        });
    }
}
//# sourceMappingURL=reminder.controller.js.map