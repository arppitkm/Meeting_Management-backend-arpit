"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActionItem = createActionItem;
exports.getActionItems = getActionItems;
exports.updateActionItemStatus = updateActionItemStatus;
exports.deleteActionItem = deleteActionItem;
const prisma_1 = require("../config/prisma");
async function createActionItem(meetingId, task, assignee, dueDate) {
    return prisma_1.prisma.actionItem.create({
        data: {
            meetingId,
            task,
            assignee,
            dueDate: dueDate
                ? new Date(dueDate)
                : null,
        },
    });
}
async function getActionItems() {
    return prisma_1.prisma.actionItem.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}
async function updateActionItemStatus(id, status) {
    return prisma_1.prisma.actionItem.update({
        where: { id },
        data: { status },
    });
}
async function deleteActionItem(id) {
    await prisma_1.prisma.actionItem.delete({
        where: { id },
    });
    return {
        message: "Action item deleted successfully",
    };
}
//# sourceMappingURL=action-item.service.js.map