"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTranscript = addTranscript;
exports.getTranscripts = getTranscripts;
exports.getMeetingTranscript = getMeetingTranscript;
const prisma_1 = require("../config/prisma");
async function addTranscript(meetingId, speaker, timestamp, text) {
    console.log("meetingId received =", meetingId);
    return prisma_1.prisma.transcriptSegment.create({
        data: {
            meetingId,
            speaker,
            timestamp,
            text,
        },
    });
}
async function getTranscripts(meetingId) {
    return prisma_1.prisma.transcriptSegment.findMany({
        where: {
            meetingId,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}
async function getMeetingTranscript(meetingId) {
    return prisma_1.prisma.transcriptSegment.findMany({
        where: {
            meetingId,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}
//# sourceMappingURL=transcript.service.js.map