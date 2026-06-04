"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = getDashboardStats;
const prisma_1 = require("../config/prisma");
async function getDashboardStats(userId) {
    const meetings = await prisma_1.prisma.meeting.count({
        where: {
            createdById: userId,
        },
    });
    const transcripts = await prisma_1.prisma.transcriptSegment.count();
    const actionItems = await prisma_1.prisma.actionItem.count();
    const completedActionItems = await prisma_1.prisma.actionItem.count({
        where: {
            status: "COMPLETED",
        },
    });
    const pendingActionItems = await prisma_1.prisma.actionItem.count({
        where: {
            status: {
                not: "COMPLETED",
            },
        },
    });
    const remindersSent = await prisma_1.prisma.reminderHistory.count();
    return {
        meetings,
        transcripts,
        actionItems,
        completedActionItems,
        pendingActionItems,
        remindersSent,
    };
}
//# sourceMappingURL=dashboard.service.js.map