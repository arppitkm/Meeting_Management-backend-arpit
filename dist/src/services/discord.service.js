"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDiscordReminder = sendDiscordReminder;
const axios_1 = __importDefault(require("axios"));
async function sendDiscordReminder(task, assignee, dueDate) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.warn("Discord webhook URL not configured");
        return;
    }
    await axios_1.default.post(webhookUrl, {
        content: `🔔 OVERDUE ACTION ITEM\n\n` +
            `Task: ${task}\n` +
            `Assigned To: ${assignee}\n` +
            `Due Date: ${dueDate.toISOString()}`
    });
}
//# sourceMappingURL=discord.service.js.map