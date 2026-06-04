"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeeting = createMeeting;
exports.getMeetings = getMeetings;
exports.getMeetingById = getMeetingById;
exports.deleteMeeting = deleteMeeting;
const prisma_1 = require("../config/prisma");
async function createMeeting(title, meetingDate, userId) {
    return prisma_1.prisma.meeting.create({
        data: {
            title,
            meetingDate: new Date(meetingDate),
            createdById: userId,
        },
    });
}
async function getMeetings(userId) {
    return prisma_1.prisma.meeting.findMany({
        where: {
            createdById: userId,
        },
        orderBy: {
            meetingDate: "desc",
        },
    });
}
async function getMeetingById(meetingId, userId) {
    return prisma_1.prisma.meeting.findFirst({
        where: {
            id: meetingId,
            createdById: userId,
        },
    });
}
async function deleteMeeting(meetingId, userId) {
    const meeting = await prisma_1.prisma.meeting.findFirst({
        where: {
            id: meetingId,
            createdById: userId,
        },
    });
    if (!meeting) {
        throw new Error("Meeting not found");
    }
    await prisma_1.prisma.meeting.delete({
        where: {
            id: meetingId,
        },
    });
    return {
        message: "Meeting deleted successfully",
    };
}
//# sourceMappingURL=meeting.service.js.map