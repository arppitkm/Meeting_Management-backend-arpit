"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeetingHandler = createMeetingHandler;
exports.getMeetingsHandler = getMeetingsHandler;
exports.getMeetingByIdHandler = getMeetingByIdHandler;
exports.deleteMeetingHandler = deleteMeetingHandler;
const meeting_validator_1 = require("../validators/meeting.validator");
const meeting_service_1 = require("../services/meeting.service");
async function createMeetingHandler(req, res) {
    try {
        const data = meeting_validator_1.createMeetingSchema.parse(req.body);
        const meeting = await (0, meeting_service_1.createMeeting)(data.title, data.meetingDate, req.userId);
        return res.status(201).json(meeting);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Failed to create meeting",
        });
    }
}
async function getMeetingsHandler(req, res) {
    const meetings = await (0, meeting_service_1.getMeetings)(req.userId);
    return res.json(meetings);
}
async function getMeetingByIdHandler(req, res) {
    const meeting = await (0, meeting_service_1.getMeetingById)(String(req.params.id), req.userId);
    if (!meeting) {
        return res.status(404).json({
            message: "Meeting not found",
        });
    }
    return res.json(meeting);
}
async function deleteMeetingHandler(req, res) {
    try {
        const result = await (0, meeting_service_1.deleteMeeting)(String(req.params.id), req.userId);
        return res.json(result);
    }
    catch (error) {
        return res.status(404).json({
            message: error instanceof Error
                ? error.message
                : "Delete failed",
        });
    }
}
//# sourceMappingURL=meeting.controller.js.map