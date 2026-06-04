"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processReminders = processReminders;
const prisma_1 = require("../config/prisma");
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
        await prisma_1.prisma.reminderHistory.create({
            data: {
                actionItemId: item.id,
                channel: "SYSTEM",
            },
        });
    }
    return actionItems.length;
}
//# sourceMappingURL=reminder.service.js.map