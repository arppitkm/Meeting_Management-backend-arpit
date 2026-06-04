"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processReminders = processReminders;
exports.startReminderJob = startReminderJob;
const node_cron_1 = __importDefault(require("node-cron"));
const prisma_1 = require("../config/prisma");
const discord_service_1 = require("../services/discord.service");
async function processReminders() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const actionItems = await prisma_1.prisma.actionItem.findMany({
        where: {
            status: {
                not: "COMPLETED",
            },
            dueDate: {
                lte: tomorrow,
            },
        },
    });
    for (const item of actionItems) {
        console.log(`[REMINDER] ${item.assignee} -> ${item.task}`);
        if (item.dueDate) {
            await (0, discord_service_1.sendDiscordReminder)(item.task, item.assignee, item.dueDate);
        }
        await prisma_1.prisma.reminderHistory.create({
            data: {
                actionItemId: item.id,
                channel: "DISCORD",
            },
        });
    }
    return actionItems.length;
}
function startReminderJob() {
    node_cron_1.default.schedule("0 9 * * *", async () => {
        const count = await processReminders();
        console.log(`[REMINDER JOB] Processed ${count} action items`);
    });
    console.log("Reminder job started");
}
//# sourceMappingURL=reminder.job.js.map